import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/AuthService';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {

  isLoggedIn: any;
  authService: AuthService | undefined;

  constructor() { }

  ngOnInit() {
  }

  login(){
    this.authService?.login();
  }

}
