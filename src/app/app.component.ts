/**
 * ngIf, * syntax and <ng-template>
 * 
 * Directives allow user to instruct angular to manipulate the DOM, add more functionality,
 * customize appearence etc.
 * 
 * There are 3 types of directives.
 * 
 * 1. Components—directives with a template.
 * 2. Structural directives—change the DOM layout by adding and removing DOM elements.
 * 3. Attribute directives—change the appearance or behavior of an element, component, or another directive.
 * 
 * ngIf is a structural directive.
 * 
 */

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <input 
    [value]="name"
    (input)="handleInputEvent($event.target.value)"/>
      
    <div *ngIf="name.length > 2">
    Searching for.. {{ name }}
    </div>

    <!-- 
      - The asterisk is a syntactic sugar,
      - Under the hood, angular will wrap the above div in a <ng-template> markup element, 
      and property bind expression to element's ngIf.
      - <ng-template> only work in the presence of structural directives.
      - Angular wraps the host element (to which the directive is applied) inside <ng-template>
      and consumes the <ng-template> in the finished DOM by replacing it with diagnostic comments.
      - Thus ng-template will never be part of final DOM.
      - Below is what angular will actually create.
    -->
    <ng-template [ngIf]="name.length > 2">
      <div>
      Searching for.. {{ name }}
      </div>
    </ng-template>

    


    `
})

export class AppComponent {
  title: string;
  name: string = '';
  handleInputEvent(value: string) {
    this.name = value;
  }
  constructor() {
    this.title = 'Ultimate Angular';
  }

}