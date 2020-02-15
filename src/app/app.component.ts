/**
 * EVENT BINDING LESSON :
 * 
 * Angular can bind class methods to the HTML dom object events
 * To do so follow the syntax 
 * 
 * <htmlElem (javascriptDomProperty) = "handlerMethodName($event)"></htmlElem>
 * 
 * THIS IS still A 1 WAY BINDING - COMPONENT VARIBALE TO TEMPLATE
 * 
 * check class for template section below for e.g
 * 
 * Flow explanation, user enters something in <input>, input event is fired, trigerring
 * handleInput(), which updates value of component variable "name".
 * 
 * Angular change detection mechanism kicks in, provides the updated value of "name"
 * to all the listeners.
 */

import {Component} from '@angular/core';

@Component({
  selector : 'app-root',
  styleUrls : ['app.component.scss'],
  template : `
    <button (click) = "handleClick()">Change Name</button>
    <input 
      (input) = "handleInput($event)"
      [value] = "name"/>
    <div>{{ name }}</div>
  `
})

export class AppComponent {
  title: string;
  name: string = "Todd Motto";
  constructor () {
    this.title = 'Ultimate Angular';
  }
  handleClick() {
    this.name = "varun singhal";
  }
  handleInput(event :any) {
    this.name = event.target.value;
  }
}