/**
 * This calss is used to tell angular to bootstrap our root module
 * So flow, is 
 * 
 * -<app-root> is defined in index.html.
 * -create a base component with 'app-root' as selector
 * -bootstrap that components in a module (called root module)
 * -finally bootstrap the module in angular
 * 
 * Now we want to compile angular in browser (also called JIT - just in time compiler), for which we will use 
 * platformBrowserDynamic module. and not platformBrowser, it does not support DI and carries compilation in server
 * (AOT - ahead of time compilation)
 * 
 */

 import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
 import {AppModule} from './app/app.module';

 /**
  * Bootstrapping an angular application
  */
 platformBrowserDynamic().bootstrapModule(AppModule);