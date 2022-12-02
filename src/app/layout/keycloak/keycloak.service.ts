import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {HttpKeycloakService} from './http-keycloak.service';
import {tap} from 'rxjs/operators';
import {KeycloakTokenResponse} from './keycloakTokenResponse';
import * as JWT from 'jwt-decode';
import {KeycloakToken} from './keycloak-token';

@Injectable({
  providedIn: 'root'
})
export class KeycloakService {

  private readonly TOKEN_KEY_NAME = 'access_token';
  // tslint:disable-next-line:variable-name
  private _loggedInUser$: Subject<string | null> = new Subject();

  constructor(private httpKeycloakService: HttpKeycloakService) {

  }

  get loggedInUser$(): Observable<string | null> {
    return this._loggedInUser$;
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY_NAME);
  }

  isLoggedIn(): boolean {
    if(this.getToken() === null) {
      return false
    }
    return true;
  }

  logIn(loginData: any): Observable<KeycloakTokenResponse> {
    return this.httpKeycloakService.logIn(loginData)
      .pipe(tap(response => this.setToken(response.access_token)));
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY_NAME);
    this.sendSignal();
  }

  private setToken(accessToken: string): void {
    localStorage.setItem(this.TOKEN_KEY_NAME, accessToken);
    this.sendSignal();
  }

  sendSignal(): void {
    this._loggedInUser$.next(this.getUsername());
  }

  private getUsername(): string | null {
    const token = this.getToken();
    if (token) {
      return (JWT.default(token) as KeycloakToken).preferred_username;
    }
    return null;
  }
}
