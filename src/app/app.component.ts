/**
 * Pipes - It's a data tranformation mechanism.
 * 
 */

import { Component } from '@angular/core';

/**
 * "?X makes X as the optional property in interface"
 */

interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkedInDate? : number
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
  <h3>Airline passengers</h3>   
  <ul>
    <li *ngFor="let pax of passengers; let i = index;">
      <span 
       class="status"
       [class.checked-in]="pax.checkedIn">
      </span>
      {{ i }} : {{ pax.fullName }}
      <!-- JSON pipe is quite useful for debugging -->
      <p>{{ pax | json }}</p>
      <!-- Date pipe -->
      <div>
      Checked in date : 
      {{  pax.checkedInDate ? (pax.checkedInDate | date:'MMMM d, y' | uppercase) : "Not checked In" }}
      </div>
    </li>
  </ul>

`
})

export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullName: 'Varun Singhal',
    checkedIn: true,
    checkedInDate : 1587400608880
  }, {
    id: 2,
    fullName: 'reeta',
    checkedIn: false
  }, {
    id: 3,
    fullName: 'Tina',
    checkedIn: true,
    checkedInDate: 1587400608880
  }]

}