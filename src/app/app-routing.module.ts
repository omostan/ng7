import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './partials/home/home.component';
import { AboutComponent } from './partials/about/about.component';
import { ContactComponent } from './partials/contact/contact.component';
import { NotFoundComponent } from './partials/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  HomeComponent
  , AboutComponent
  , ContactComponent
  , NotFoundComponent
];
