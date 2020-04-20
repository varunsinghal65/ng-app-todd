import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../passenger-dashboard/models/passenger.interface';


@Component({
    selector : 'passenger-dashboard',
    styleUrls : ['passenger-dashboard.component.scss'],
    template : `
    <passenger-count [items]="passengers"></passenger-count>
    <!--
    Issue here : because of the nature of JS,
    the passenger-dashboard will not send a clone of the passengers in
    [detail], instead it operates by passing reference,
    Since reference is passed, when local component (passenger-detail) 's state changes
    parent conatiner state is also impacted, this is actually not intended, since we would like to perform
    the update only by emitting events from child
    -->
    <div *ngFor="let pax of passengers">
    {{ pax.fullname }}
    </div>
    <passenger-detail
      *ngFor="let pax of passengers;"
      [detail]="pax"
      (edit)="handleEdit($event)"
      (remove)="handleRemove($event)">
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

  handleRemove(event: Passenger) {
    /**
     * This is a immutable state change
     *
     * We do not want to mutate the existing passenger, thus we use filter method,
     * which will create return a new array
     */
    this.passengers = this.passengers.filter((pax:Passenger)=>{
      return pax.id !== event.id;
    });
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((pax:Passenger)=>{
      if (pax.id === event.id) {
        /**
         * Immutable state change, as we are creating a new object rather than modifying the old one.
         * Object.assign does exactly that, copying data from event into a new instance of Passenger
         */
        pax = Object.assign({}, pax, event);
      }
      return pax;
    });
    console.log(this.passengers);
  }
}