import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../LoginFrame/Login.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../Services/AuthService';

@Component({
  selector: 'app-Registrati',
  templateUrl: './Registrati.component.html',
  styleUrls: ['./Registrati.component.css']
})
export class RegistratiComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public loginComponent: LoginComponent, // Use the imported LoginComponent
    public fb: FormBuilder // Add FormBuilder as a dependency
  ) { }

  // Form registration for user
  userRegisterForm!: FormGroup;

  // Strings for error messages (Email field)
  EmailInvalidText: string = "";

  // Strings for error messages (Password confirm field)
  invalidTextConfirmPassword: string = "";

  ngOnInit() {

    // Initiate the userRegisterForm
    this.SetInitStateUserRegisterForm();
  }

  // Set the userRegisterForm
  SetInitStateUserRegisterForm(){

    // Add validators to form fields
    this.userRegisterForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.MustMatch('password', 'confirmPassword') });
    
  }

  Registrati(){
    var IsEmailValid = this.userRegisterForm.get('email')?.valid;

    if (!IsEmailValid) {
      if(this.userRegisterForm.get('email')?.value != null && this.userRegisterForm.get('email')?.value != '') {
        this.EmailInvalidText = "Il formato dell'email è errato";
      }else{
        this.EmailInvalidText = "L'email è obbligatoria";
      }
    }

    this.userRegisterForm.markAsTouched();

    if (this.userRegisterForm.valid) {
      this.authService.login(this.userRegisterForm.value);
    }
  }

  // Method to control password validation
  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        this.invalidTextConfirmPassword = "La conferma della password è obbligatoria"
        return;
      }

      if (control.value !== matchingControl.value) {
        this.invalidTextConfirmPassword = "La password e la conferma con corrispondono"
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }


}
