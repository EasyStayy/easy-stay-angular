import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SectionhotelsComponent } from './sectionhotels/sectionhotels.component';
import {OfferComponent} from './offer/offer.component';
import {GestionReservationComponent} from './gestion-reservation/gestion-reservation.component';
import {GestionHotelComponent} from './gestion-hotel/gestion-hotel.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotel', component: SectionhotelsComponent },
  { path: 'offer', component: OfferComponent},
  { path: 'gestion-reservation', component:GestionReservationComponent},
  { path: 'gestion-hotel', component:GestionHotelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
