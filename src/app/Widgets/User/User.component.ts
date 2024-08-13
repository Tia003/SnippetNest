import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/AuthService';

@Component({
  selector: 'app-User',
  templateUrl: './User.component.html',
  styleUrls: ['./User.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    public authService: AuthService,
  ) { }

  userPhoto: string = "https://material.angular.io/assets/img/examples/shiba2.jpg";

  // User
  user: any;

  ngOnInit() {

    // Simulate a user photo request
    this.user = this.authService.GetUserInfo();

  }

}
