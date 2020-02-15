import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
/**
 * This module was imported because we are creating a client application
 */
import { BrowserModule } from '@angular/platform-browser';
/**
 * This module is used because we want to use directives etcin this module.
 */
import { CommonModule } from  '@angular/common';
/**
 * This module will provide 2 way data binding, more on successive lessons
 */
import { FormsModule } from '@angular/forms';

/**
 * @NgModule({X}), X provides module definition for "App Module"
 * "bootstrap" : <componentclass> - used to indicate angular that this is a root/base module
 *                                  .Tells angular that <componentclass> is to be boostrapped 
 *                                   to index.html
 * "declarations" : [array] - we need to register all the components that we wish to use in 
 *                            this module
 * "imports": [array] - sepcifies the list of modules that the components of RootModule would want to use
 */
@NgModule({
  declarations : [
    AppComponent
  ],
  imports : [
    BrowserModule, CommonModule, FormsModule
  ],
  bootstrap : [AppComponent],
})
export class AppModule{}