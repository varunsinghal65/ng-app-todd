/**
 *Template #ref :
 * 
 * Ng allows devs to access a HTML DOM object anywhere in the template via
 * #ref
 * 
 * Syntax
 * 
 * <htmlElem #reference></htmlElem>
 * <button (click)="handleClick(reference)"></button>
 */

import {Component} from '@angular/core';

@Component({
  selector : 'app-root',
  styleUrls : ['app.component.scss'],
  template : `
    <button (click)="handleClick(username.value)">Get Value</button>
    <input [value]="name" #username/>
    `
})

export class AppComponent {
  title: string;
  name: string = "Todd Motto";
  handleClick(value:string) {
    console.log(value);
  }
  constructor () {
    this.title = 'Ultimate Angular';
  }

}