import {Component} from '@angular/core';
import {Passenger} from '../../passenger-dashboard/models/passenger.interface';


/**
 * Component architecture.
 *
 * As a best practice, components are of 2 types
 *
 * 1. Smart/container components
 *    - will have other components,
 *    - usually the root of the component tree,
 *    - communicate with services (for example get data from an http service)
 *    - pass the data to child components and render them.
 * 2. Dumb/presentation components
 *    - they dont arrange for data
 *    - they simply receive it and are rendered by tree root,
 *    - they accept data via HTML inputs
 *    - they emit data changes via event outputs
 *
 * One way data flow
 *
 * Imagine a tree of components, in this tree data will flows down, and
 * events are emitted up by every child components to its parent,
 * refer video if you do not understand this.
 *
 */
@Component({
    selector : 'passenger-dashboard',
    styleUrls : ['passenger-dashboard.component.scss'],
    template : `
    <div>
    <h3>Airline Passengers</h3>
    <ul>
      <li *ngFor="let passenger of passengers; let i = index;">
        <span
          class="status"
          [class.checked-in]="passenger.checkedIn"></span>
        {{ i }}: {{ passenger.fullname }}
        <div class="date">
          Check in date:
          {{ passenger.checkInDate ? (passenger.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
        </div>
        <div class="children">
          Children: {{ passenger.children?.length || 0 }}
        </div>
      </li>
    </ul>
    </div>
    `
})
export class PassengerDashboardComponent {
    passengers: Passenger[] = [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: true,
        checkInDate: 1490742000000,
        children: null
      }, {
        id: 2,
        fullname: 'Rose',
        checkedIn: false,
        checkInDate: null,
        children: [{ name: 'Ted', age: 12 },{ name: 'Chloe', age: 7 }]
      }, {
        id: 3,
        fullname: 'James',
        checkedIn: true,
        checkInDate: 1491606000000,
        children: null
      }, {
        id: 4,
        fullname: 'Louise',
        checkedIn: true,
        checkInDate: 1488412800000,
        children: [{ name: 'Jessica', age: 1 }]
      }, {
        id: 5,
        fullname: 'Tina',
        checkedIn: false,
        checkInDate: null,
        children: null
      }];
}