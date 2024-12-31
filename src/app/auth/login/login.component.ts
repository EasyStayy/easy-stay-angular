import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoginFormVisible: boolean = false;

  constructor(private fb: FormBuilder,private router: Router , private authService: AuthService ) {
    // Define the fields for the login form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],  // Email field with validation
      password: ['', [Validators.required]]  // Password field with validation
    });
  }

  ngOnInit(): void {
    // Initialization if necessary
  }

  // Method to display the login form
  showLoginForm() {
    this.isLoginFormVisible = true;
  }

  // Method to hide the login form
  closeLoginForm() {
    this.isLoginFormVisible = false;
  }

  // Method to handle form submission
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login form submitted successfully:', this.loginForm.value);
      this.authService.login();
      this.router.navigate(['/']);  // Redirige l'utilisateur vers la page d'accueil

      // Add logic to send the login data to the backend
      this.closeLoginForm(); // Hide the form after submission
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
