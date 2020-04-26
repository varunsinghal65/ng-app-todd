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

import { Component } from '@angular/core';

interface NavItem {
  name: string,
  link: string,
  exactLinkMatch: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <nav class='nav'>
    <a *ngFor="let navItem of navItems"
     [routerLink]='navItem.link' 
     routerLinkActive='active'
     [routerLinkActiveOptions]='{exact: navItem.exactLinkMatch}'>{{ navItem.name }}</a>
  </nav>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {

  readonly navItems: NavItem[] = [
    { name: 'Home', link: '/', exactLinkMatch: true },
    { name: '404', link: '/oops', exactLinkMatch: false },
    { name: 'Passengers', link: '/passengers', exactLinkMatch: false }
  ];


}