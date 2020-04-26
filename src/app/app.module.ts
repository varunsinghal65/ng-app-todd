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
  * '**' is a wild card path, meaning, every navigation will be matched against this route.
  * So, of we place it at last, it means, none of the above routes have matched, hence it acts 
  * as a route for 404 page.
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
    // Ng by defaults uses HTML 5 based history api for routing, 
    // you could change it to hash based
    // Deeper understanding needed, which is better : https://stackoverflow.com/questions/9340121/what-are-the-differences-between-history-pushstate-location-hash
    BrowserModule, CommonModule, RouterModule.forRoot(ROOT_APP_ROUTES, {useHash: true}),
    // feature modules
    PassengerDashboardModule
  ],
  bootstrap : [AppComponent],
})
export class AppModule{}