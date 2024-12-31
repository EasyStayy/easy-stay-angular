import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionhotelsComponent } from './sectionhotels/sectionhotels.component';
import {OfferComponent} from './offer/offer.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotel', component: SectionhotelsComponent },
  { path: 'offer', component: OfferComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
