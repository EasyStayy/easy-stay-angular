import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() { }

  login(): void {
    // Ici vous pourriez vérifier les informations de l'utilisateur via un backend.
    // Pour cet exemple, on va juste simuler une connexion réussie.
    this.isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true');  // Enregistrer l'état dans localStorage pour la persistance
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');  // Supprimer l'état de l'authentification dans localStorage
  }

  getAuthStatus(): boolean {
    return this.isAuthenticated || localStorage.getItem('isAuthenticated') === 'true';
  }
}
