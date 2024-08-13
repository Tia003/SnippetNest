import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../Services/AuthService';
import { LoginComponent } from '../LoginFrame/Login.component'; // Import the LoginComponent
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-Accedi',
  templateUrl: './Accedi.component.html',
  styleUrls: ['./Accedi.component.css']
})
export class AccediComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public loginComponent: LoginComponent, // Use the imported LoginComponent
    public fb: FormBuilder // Add FormBuilder as a dependency
  ) { }

  // Strings for error messages (Email field)
  EmailInvalidText: string = "";

  // Form for login
  userForm!: FormGroup;

  ngOnInit() {

    // Initiate the userForm
    this.SetInitStateUserForm();
  }

  SetInitStateUserForm() {

    // FormGroup for the user
    this.userForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      keepConnect: [false]
    });
  }

  Login(){

    var IsEmailValid = this.userForm.get('email')?.valid;

    if (!IsEmailValid) {
      if(this.userForm.get('email')?.value != null && this.userForm.get('email')?.value != '') {
        this.EmailInvalidText = "Il formato dell'email è errato";
      }else{
        this.EmailInvalidText = "L'email è obbligatoria";
      }
    }

    this.userForm.markAsTouched();

    if (this.userForm.valid) {
      this.authService.login(this.userForm.value);
    }
  }

}