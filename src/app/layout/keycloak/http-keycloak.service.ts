import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {KeycloakTokenResponse} from './keycloakTokenResponse';

@Injectable({
  providedIn: 'root'
})
export class HttpKeycloakService {

  private url = `https://keycloak.switchfully.com/auth/realms/java-sep2022/protocol/openid-connect/token`;
  private httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'})
  };

  constructor(private http: HttpClient) {
  }

  logIn(loginData: any): Observable<KeycloakTokenResponse> {

    const body = new URLSearchParams();
    body.set('username', loginData.username);
    body.set('password', loginData.password);
    body.set('client_id', 'petinder');
    body.set('client_secret', 'OzoAvHIltUbICGtpA6kP7W6ZXogZHWZc');
    body.set('grant_type', 'password');
    return this.http.post<KeycloakTokenResponse>(this.url, body.toString(), this.httpOptions);
  }
}
