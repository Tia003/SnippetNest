import { Component, HostListener, Injectable, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/AuthService';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class LoginComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) { }

  // Altro
  ctrlPressed = false;
  isHovering = false;

  // LoginFrame 
  public showAccedi: boolean = true;
  public showRegistrati: boolean = false;
  public showForgotPassword: boolean = false;

  ngOnInit() { }

  public OnshowForgotPassword(){
    this.showForgotPassword = !this.showForgotPassword;
    this.showAccedi = false;
    this.showRegistrati = false;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Control') {
      this.ctrlPressed = true;
      if (this.isHovering) {
        this.addRotateClass();
      }
    }
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Control') {
      this.ctrlPressed = false;
      this.removeRotateClass();
    }
  }

  onMouseEnter() {
    this.isHovering = true;
    if (this.ctrlPressed) {
      this.addRotateClass();
    }
  }

  onMouseLeave() {
    this.isHovering = false;
    this.removeRotateClass();
  }

  addRotateClass() {
    const element = document.querySelector('#logo');
    if (element) {
      element.classList.add('rotate');
    }
  }

  removeRotateClass() {
    const element = document.querySelector('#logo');
    if (element) {
      element.classList.remove('rotate');
    }
  }

}
