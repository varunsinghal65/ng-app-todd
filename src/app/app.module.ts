import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from  '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module';
import { HomeComponent } from './home.component';

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
  * 1. RouterModule.forRoot() should be used in root module only.
  * 2. forRoot creates a module that contains all the directives, the given routes, and the router service itself.
  * 3. forChild creates a module that contains all the directives and the given routes, 
  * but does not include the router service. It registers the routers and uses the router service created at the root level.
  * 4. This is important because location is a mutable global property. Having more than one object manipulating the
  * location is not a good idea.
  * 
  * Nice explaantion :  https://www.tektutorialshub.com/angular/angular-routing-between-modules/#forroot-vs-forchild
  * Summary : if forRoot is used in lazy loaded feature modules, there will be 2 instances of router service. one at root
  * and other at the feature module level, routing service should always be one.
  */
 export const ROOT_APP_ROUTES : Routes = [{
   path: '', component: HomeComponent, pathMatch: 'full'
 }];

@NgModule({
  declarations : [
    AppComponent,
    HomeComponent
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