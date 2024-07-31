import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    isLoggedIn: boolean = false;

    constructor(private router: Router) {
    }

    public login() {
        this.isLoggedIn = true;
        this.saveUser();
        this.router.navigate(['/home']);
    }

    public saveUser() {
      sessionStorage.setItem('username', 'test@test.com');
      sessionStorage.setItem('token', 'ghasgd&hga&/hgajhgds');
    }

    public isUserLoggedIn() {
      if (sessionStorage.getItem('username') != null && sessionStorage.getItem('token') != null) {
        this.isLoggedIn = true;
        return true;
      }else{
        return false;
      }
    }

    public logOut() {
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('token');
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    }

    public getUser(){
      return {
        username: sessionStorage.getItem('username'), 
        token: sessionStorage.getItem('token')
      };
    }
}