import { Component, OnInit } from '@angular/core';
import {LoginFacade} from '../../facade/login.facade';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {

  facade: LoginFacade;

  constructor(private loginFacade: LoginFacade) {
    this.facade = loginFacade;
    this.facade.setUserNameLS();
  }

  ngOnInit() {
  }

  login(form: NgForm) {
    if (form.invalid) {
      return false;
    }
    this.loginFacade.login();
  }

}
