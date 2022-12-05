import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {KeycloakService} from "./layout/keycloak/keycloak.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Eurder';
  loggedInUser$!: Observable<string | null>;

  constructor(private keycloakService: KeycloakService) {
  }

  ngOnInit(): void {
    this.loggedInUser$ = this.keycloakService.loggedInUser$;
    setTimeout(() => this.keycloakService.sendSignal(), 1);
  }

  logout(): void {
    this.keycloakService.logout();
    console.log('logged out');
  }
}
