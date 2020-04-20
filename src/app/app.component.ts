/**
 * Safe navigation opertor
 * 
 */

import { Component } from '@angular/core';

interface Child {
  name:string,
  age:number
 }

 /**
  * "children: Child[] | null" tells TS compiler that "children" property should always be there,
  *  but it can either of type null or Child[]
  */
interface Passenger {
  id: number,
  fullName: string,
  checkedIn: boolean,
  checkedInDate? : number,
  children: Child[] | null
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
      <p>{{ pax | json }}</p>
      <div>
      Checked in date : 
      {{  pax.checkedInDate ? (pax.checkedInDate | date:'MMMM d, y' | uppercase) : "Not checked In" }}
      </div>
      <!-- Unsafe operation, runtime browser breaks when "pax.children" is null --> 
      <!-- 
      <div>
      Children : {{ pax.children.length }}
      </div>
      -->

      <!-- Safe op : ? -->
      <!-- 
      "?", safe operator, basically tells angular, if pax.children is defined, go the next steps,
      otherwise STOP evaluating expression . So, ? is use
      --> 
      <div>
      Children : {{ pax.children?.length}}
      </div>
      <!--
      Also we can specify a value to be computed, when ? detects that pax.children is null/undefined,
      it falls back to the vlaue specified after OR operator
      -->
      <div>
      Children : {{ pax.children?.length || 0}}
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
    checkedInDate : 1587400608880,
    children : [{name: 'chota varun', age: 12}, {name: 'aur chota varun', age:9}]
  }, {
    id: 2,
    fullName: 'reeta',
    checkedIn: false,
    children: null
  }, {
    id: 3,
    fullName: 'Tina',
    checkedIn: true,
    checkedInDate: 1587400608880,
    children : [{name: 'choti Tina', age: 11}, {name: 'aur choti Tina', age:6}]
  }]

}