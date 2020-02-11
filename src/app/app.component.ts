
/**
 * Component is a "Decorator"
 * Decorator is a function that annotates another function
 * Using the component decorator against a typescript class tells angular about
 * meta-data (like css, html), that will be used by this html element.
 * 
 * All components will create a html element
 */
import {Component} from '@angular/core';

/**
 * Component is a function, but since it is a decorator (TS feature), we just need to use "@Component".
 * It will register this component with angular, telling it that this is a angular component.
 */
@Component({
  selector : 'app-root',
  styleUrls : ['app.component.scss'],
  template : `
    <div class='app'>
    {{ title }}
    </div>
  `
})

export class AppComponent {
  //Nice way : All declarations here, init in constructor
  title: string;
  constructor () {
    this.title = 'Ultimate Angular';
  }
}