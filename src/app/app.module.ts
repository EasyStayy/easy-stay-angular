import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SectionhotelsComponent } from './sectionhotels/sectionhotels.component';
import { FooterComponent } from './footer/footer.component';
import { OfferComponent } from './offer/offer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SectionhotelsComponent,
    FooterComponent,
    OfferComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // Importer les animations
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',  // position du toast
      timeOut: 3000,                    // durée d'affichage
      closeButton: true,                // ajouter un bouton de fermeture
      progressBar: true,                // afficher une barre de progression
      enableHtml: true                  // permet l'utilisation de HTML dans le toast
    })  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
