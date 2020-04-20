/**
 * ngClass and className PROPERT bindings
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
    <!-- Let us say i want to display green and red dots against passengers names
    based on their checking status -->
    
    <!-- Way 1 : Using class name--> 
    
    <!-- 
    if pax.checkedIn evaluates to true, angular will 
    add css class "checked-in" to the existing classes list
     -->
  <ul>
    <li *ngFor="let pax of passengers; let i = index;">
      <span 
       class="status"
       [class.checked-in]="pax.checkedIn">
      </span>
      {{ i }} : {{ pax.fullName }}
    </li>
  </ul>

    <!-- Way 2 : Using ngClass--> 
    
    <!-- 
    What if tomorrow, i have to add multiple CSS classes/styles based on the 
    many component variables ?

    Of course, we can add in SASS, and use way 1, but we can also use ngClass, which is much cleaner,
    We suppy ngClass with the below configuration object : 
    {
      <CSS-CLASS-NAME> : <TS COMPONENT boolean variable>
    }
    if TS variable is true, "CSS-CLASS-NAME" is added to the list of CSS classes.
     
    In chrome dev tools, you can scan the LI elements and you will see the appropriate classes 
    added 
    -->
    <ul>
    <li *ngFor="let pax of passengers; let i = index;">
      <span 
       class="status"
       [ngClass]="
       {
         'checked-in': pax.checkedIn, 
         'checked-out': !pax.checkedIn
       }
       ">
      </span>
      {{ i }} : {{ pax.fullName }}
    </li>
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