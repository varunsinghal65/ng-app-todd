import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from  '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module';
import { HomeComponent } from './home.component';
import {NotFoundComponent} from './not-found.component';

/**
 *
 * Feature modules vs root modules.
 *
 * Organize your code into feature modules rather than dumping everything in root module
 *
 * Avantages
 * - lazy load
 * - isolation
 * - potability
 * - app.module.ts remains clean
 * - clear segreagtion of dependencies
 *
 */

 /**
  */
 export const ROOT_APP_ROUTES : Routes = [{
   path: '', component: HomeComponent, pathMatch: 'full',
 }, {
  path: '**', component: NotFoundComponent
 }];

@NgModule({
  declarations : [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports : [
    // angular modules
    BrowserModule, CommonModule, RouterModule.forRoot(ROOT_APP_ROUTES),
    // feature modules
    PassengerDashboardModule
  ],
  bootstrap : [AppComponent],
})
export class AppModule{}