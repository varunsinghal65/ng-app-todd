/**
 * ngFor
 * 
 */

import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <h3>Airline passengers</h3>
  <ul>
    <!-- "index" is exposed by Angular -->
    <li *ngFor="let pax of passengers; let i = index;">
    {{ i }} : {{ pax.fullName }}
    </li>
  </ul>
      
  <!-- Under the hood, angular actually converts the above sugar synatx into the following markup -->
  <ul>
    <ng-template ngFor let-pax let-i="index" [ngForOf]="passengers">  
      <li>
       {{ i }} : {{ pax.fullName }}
      </li>
    </ng-template>
  </ul>
    `
})

export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullName: 'Varun Singhal',
    checkedIn: true
  }, {
    id: 2,
    fullName: 'reeta',
    checkedIn: false
  }, {
    id: 3,
    fullName: 'Tina',
    checkedIn: true
  }]

}