import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { SnackBarService } from './SnackBar.service';
import { SnackBarType } from '../Enum/SnackBarType.enum';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private router: Router,
    private snackBarService: SnackBarService,
  ) { }

  isLoggedIn: boolean = false;

  public login(user: any) {

    this.isLoggedIn = true;
    
    // Save user information
    this.saveUser(user);

    var Notifica = this.snackBarService.GetSuccessObj(SnackBarType.toast ,'Accesso effettuato', 'Benvenuto! Goditi la tua esperienza su SnippetNest', '');

    // Refresh notifica 
    this.snackBarService.refresh(Notifica);

    // Show the snackbar
    this.snackBarService.show();

    this.router.navigate(['/home']);
  }

  public saveUser(user: any) {
    // Save user information on SessionStorage
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  IsUserLoggedIn(): boolean {

    // Check if user is logged in
    var user = sessionStorage.getItem('user');

    if (user == null) {
      this.isLoggedIn = false;
      return this.isLoggedIn
    }else {
      this.isLoggedIn = true;
      return this.isLoggedIn
    }
  }

  GetUserInfo(){
    // Get user information from SessionStorage
    var user = sessionStorage.getItem('user');

    return JSON.parse(user!);
  }

  public logout() {

    // Clear user information from SessionStorage
    sessionStorage.removeItem('user');
    this.isLoggedIn = false;

    this.router.navigate(['/login']);
  }
}