import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from  '@angular/common';
import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module';

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

@NgModule({
  declarations : [
    AppComponent
  ],
  imports : [
    // angular modules
    BrowserModule, CommonModule,
    // feature modules
    PassengerDashboardModule
  ],
  bootstrap : [AppComponent],
})
export class AppModule{}