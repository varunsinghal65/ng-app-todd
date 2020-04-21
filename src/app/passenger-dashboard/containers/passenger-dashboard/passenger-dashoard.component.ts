import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';


@Component({
    selector : 'passenger-dashboard',
    styleUrls : ['passenger-dashboard.component.scss'],
    template : `
    <passenger-count [items]="passengers"></passenger-count>
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

  /**
   * 
   * Constructor based DI
   *
   * Note, passengerDashboardSvc is declared private,
   * so that its not exposed to the template of this class
   * (At leats angular AOT/ or compilation should complain if you try to access)
   * 
   * @param paxSevice 
   */
  constructor(private readonly paxSevice: PassengerDashboardService) {
  }

  /**
   * Use this hook for getting the data through services
   */
  ngOnInit() {
    console.log("ngOnInit called");
    this.passengers = this.paxSevice.getPassengers();
  }

  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((pax:Passenger)=>{
      return pax.id !== event.id;
    });
  }

  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((pax:Passenger)=>{
      if (pax.id === event.id) {
        pax = Object.assign({}, pax, event);
      }
      return pax;
    });
    console.log(this.passengers);
  }
}