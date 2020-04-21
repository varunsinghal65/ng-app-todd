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
  <app-passenger-viewer></app-passenger-viewer>
  `
})

export class AppComponent {
}