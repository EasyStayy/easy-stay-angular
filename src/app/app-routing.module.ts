import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionhotelsComponent } from './sectionhotels/sectionhotels.component';
import {OfferComponent} from './offer/offer.component';
<<<<<<< HEAD
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
=======
>>>>>>> 77998fbcbfaac656cd172dd48addf86de74afc47
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotel', component: SectionhotelsComponent },
  { path: 'offer', component: OfferComponent},
<<<<<<< HEAD
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
=======
>>>>>>> 77998fbcbfaac656cd172dd48addf86de74afc47
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
