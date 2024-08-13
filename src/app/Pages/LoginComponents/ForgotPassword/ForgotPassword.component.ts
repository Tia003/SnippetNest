import { LoginComponent } from '../LoginFrame/Login.component';
import { AuthService } from './../../../Services/AuthService';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ForgotPassword',
  templateUrl: './ForgotPassword.component.html',
  styleUrls: ['./ForgotPassword.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  
  constructor(
    public authService: AuthService,
    public loginComponent: LoginComponent // Use the imported LoginComponent
  ) { }

  isLoading: boolean = true;

  ngOnInit() {
  }

}
