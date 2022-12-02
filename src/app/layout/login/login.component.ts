import { Component } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {KeycloakService} from "../keycloak/keycloak.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!: UntypedFormGroup;
  message!: string;

  constructor(private formBuilder: UntypedFormBuilder, private keycloakService: KeycloakService, private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    })
  }

  onSubmit(loginData: any) {
    this.keycloakService.logIn(loginData)
      .subscribe(_ => this.message = 'Success!', err => this.message = 'Wrong username and/or password!')
  }
}
