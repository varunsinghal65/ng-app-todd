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
  <nav class='nav'>
  <!-- 
  1. routerLinkActive is a ng directive, that will add the CSS class specified to the elem, 
  when the elem's routerLink is activated.
  2. Now, by default angular will apply the CSS class even if part of the routerLink URL is active.
  meaning, for routerLink='/users/bob', css class will be applied to the elem if '/users' OR '/users/bob' is activated.
  Similarly, in the below example, when we click on 404 link, home link is still styled with css class.
  This is so because, ng will apply CSS class to home elem for every URL, since it's routerlink is '/', and '/' will be part of every URL.
  To fix this, we tell angular to do an exact match using routerLinkActiveOptions.
  3. Also, [X]='Y', ng interprets Y as a non string, X='Y', ng interprets Y as a string. 
  -->
    <a 
     routerLink='/' 
     routerLinkActive='active'
     [routerLinkActiveOptions]='{exact: true}'>Home</a>
    <a 
     routerLink='/oops' 
     routerLinkActive='active'>404</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
}