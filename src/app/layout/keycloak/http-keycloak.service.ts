import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeycloakTokenResponse} from './keycloakTokenResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpKeycloakService {

  private url = `https://keycloak.switchfully.com/auth/realms/eurder-dompie/protocol/openid-connect/token`;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  };

  constructor(private http: HttpClient) {
  }

  logIn(loginData: any): Observable<KeycloakTokenResponse> {
    const body = new URLSearchParams();
    body.set('username', loginData.username);
    body.set('password', loginData.password);
    body.set('client_id', 'eurder');
    body.set('client_secret', 'jOgnpBeDi44UWy4cwj81xp6oYkx6TRQH');
    body.set('grant_type', 'password');
    return this.http.post<KeycloakTokenResponse>(this.url, body.toString(), this.httpOptions);
  }
}
