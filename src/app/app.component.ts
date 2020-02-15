/**
 * 2-way BINDING LESSON :
 * 
 * -Ng allows 1 way and 2 way databinding.
 * -2 way databinding is good, when you are dealing with a local component
 * -If you want to emit a change globally, use the event binding and emit the change
 * using a event listener
 * 
 * 2 way data binding involves 2 steps
 * 
 * 1. bind component variable to html dom's value "JS" property (property binding)
 * 2. as the "value" changes, emit an event, in event handler, modify the 
 * component variable (event binding)
 * 
 * Now 2 way data binding can be achieved in 3 ways :
 * 
 * WAY 0 : 
 * [value] - property binding
 * (input) - listening for change via event binding
 * 
 * 
 * WAY 1 :
 * [ngModel] -  step for property binding
 * (ngModelChange) - Create a "input change" event listener using - 
 * step for listening for change via event binding
 * 
 * WAY 2 : 
 * Use [(ngModel)]
 * You have a event binding inside property binding.
 * Now angular will autmatically and implicitly perform property and event binding
 *
 */

import {Component} from '@angular/core';

@Component({
  selector : 'app-root',
  styleUrls : ['app.component.scss'],
  template : `
    <!-- Way 0 of achieving 2 way data binding -->
    <input 
      (input) = "handleInput($event)"
      [value] = "name"/>

    <!-- Way 1 of achieving 2 way data binding -->
    <input 
      [ngModel] = "name"
      (ngModelChange) = "handleNgModelChange($event)"/>

    <!-- Way 3 of achieving 2 way data binding -->
    <input
      type="text"
      [(ngModel)]="name"/>

    <br>Value of component varibale : <span>{{ name }}</span>

    `
})

export class AppComponent {
  title: string;
  name: string = "Todd Motto";
  constructor () {
    this.title = 'Ultimate Angular';
  }
  handleInput(event :any) {
    this.name = event.target.value;
  }
  /**
   * NgModelChange will provide you LATEST the "value" JS property
   * of the HTML element against which ngModel is used
   * 
   * @param value 
   */
  handleNgModelChange(value:string) {
    this.name = value;
  }
}