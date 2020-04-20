import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../passenger-dashboard/models/passenger.interface';


/**
 * ngOnInit lifecycle hook
 *
 * ngOnInit is a function called by angular, after a component is initialized.
 * "ng" in ngOnInit means that its invocation is managed by angular.
 *
 * We should place logic for fetching data, that the component plans to use,
 * in this function.
 */
@Component({
    selector : 'passenger-dashboard',
    styleUrls : ['passenger-dashboard.component.scss'],
    template : `
    <passenger-count [items]="passengers"></passenger-count>
    <!--
    *ngFor will cause angular to render the detail component
    for every pax in passengers.

    Using property binding, we are passing "pax" to child component
    -->
    <passenger-detail
      *ngFor="let pax of passengers;"
      [detail]="pax">
    </passenger-detail>
    `
})
export class PassengerDashboardComponent implements OnInit{
  passengers: Passenger[] = [];
  ngOnInit() {
    console.log("ngOnInit called");
    this.passengers = [{
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
}