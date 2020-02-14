/**
 * PROPERTY BINDING LESSON :
 * 
 * Angular can bind the TS component class varibles to the javascript properties of an html DOM element.
 * To do so follow the syntax 
 * 
 * <htmlElem [javascriptDomProperty] = "componentVariableName"></htmlElem>
 * 
 * THIS IS A 1 WAY BINDING - COMPONENT VARIBALE TO TEMPLATE
 * 
 * check class for template section below for e.g
 */


import {Component} from '@angular/core';

@Component({
  selector : 'app-root',
  styleUrls : ['app.component.scss'],
  template : `
    <div class='app'>
      <div>{{ title }}</div>
    </div>
    <div>
      <h1 [innerHTML]="title"></h1>
    </div>
    <img [src]="logo"/>
    <!-- Since property binding is 1 way, if i type in the input box, then the value is not assigned to 
    component varibale "name", thus second statement still shows "Varun"-->
    <input type="text" [value]="name">
    <div>{{name}}</div>
  `
})

export class AppComponent {
  title: string;
  name: string = "Varun";
  logo: string = "assets/img/logo.svg";
  constructor () {
    this.title = 'Ultimate Angular';
  }
}