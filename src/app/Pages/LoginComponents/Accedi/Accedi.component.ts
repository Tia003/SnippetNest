import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/AuthService';
import { LoginComponent } from '../LoginFrame/Login.component'; // Import the LoginComponent

@Component({
  selector: 'app-Accedi',
  templateUrl: './Accedi.component.html',
  styleUrls: ['./Accedi.component.css']
})
export class AccediComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public loginComponent: LoginComponent // Use the imported LoginComponent
  ) { }

  keepConnectCheck: boolean = false;

  ngOnInit() {
  }

}