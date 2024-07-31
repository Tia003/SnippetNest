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
  ) { }

  isLoading: boolean = true;

  ngOnInit() {
  }

}
