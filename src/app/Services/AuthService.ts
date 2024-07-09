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
        this.router.navigate(['/home']);
    }
}