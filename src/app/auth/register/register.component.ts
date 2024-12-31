import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  isRegisterFormVisible: boolean = false;



  constructor(private fb: FormBuilder,    private toastr: ToastrService , private router: Router 

  ) {
    // Définir les champs du formulaire d'inscription
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      role: ['', Validators.required] 

    }, {
      validator: this.mustMatch('password', 'confirmPassword') // Custom validator pour confirmer les mots de passe
    });
  }

  ngOnInit(): void {
    // Initialisation si nécessaire
  }

  // Méthode pour afficher le formulaire d'inscription
  showRegisterForm() {
    this.isRegisterFormVisible = true;
  }

  // Méthode pour masquer le formulaire
  closeRegisterForm() {
    this.isRegisterFormVisible = false;
  }

  // Custom validator pour s'assurer que les mots de passe correspondent
  mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.toastr.success('Registration successful!', 'Success');
      this.registerForm.reset(); // Optionnel, réinitialiser le formulaire
      this.router.navigate(['/login']); // Redirige vers la page /login

    } else {
      this.toastr.error('Please fill out the form correctly.', 'Error');
    }
  }
}
