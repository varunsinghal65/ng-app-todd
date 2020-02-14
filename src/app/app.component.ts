
import {Component} from '@angular/core';

@Component({
  selector : 'app-root',
  styleUrls : ['app.component.scss'],
  template : `
    <div class='app'>
      <!--Interpolation refers to embedding expressions into marked up text,
       interpolation uses curly braces as delimiter -->
      <!-- X in {{X}} is called expression --> 
      <div>{{ title + '!'}}</div>
      <div>{{numberOne}}</div>
      <div>{{numberTwo + numberOne}}</div>
      <div>{{ isHappy ? ':-)' : ':-(' }}
    </div>
  `
})

export class AppComponent {
  //Nice way : All declarations here, init in constructor
  numberOne : number = 1;
  numberTwo : number = 2;
  isHappy : boolean = false;
  title: string;
  constructor () {
    this.title = 'Ultimate Angular';
  }
}