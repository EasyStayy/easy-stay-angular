<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
=======
import { Component } from '@angular/core';
>>>>>>> 77998fbcbfaac656cd172dd48addf86de74afc47

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
<<<<<<< HEAD
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Vérifier l'état d'authentification au démarrage
    this.isAuthenticated = this.authService.getAuthStatus();
  }

  logout() {
    this.authService.logout();
    this.isAuthenticated = false;  // Mettre à jour l'état de l'authentification
  }
=======
export class HeaderComponent {

>>>>>>> 77998fbcbfaac656cd172dd48addf86de74afc47
}
