import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

    isLoggedIn: boolean = true;
    router: any;

    constructor(router: RouterModule) { 
        this.router = router;
    }
    public login() {
        this.isLoggedIn = true;
        this.router.navigate(['/home']);
    }
}