import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { Router } from '@angular/router';


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
      (view)="handleView($event)"
      (remove)="handleRemove($event)">
    </passenger-detail>
    <a routerLink='1'>YO YO</a>
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
  constructor(
    private readonly paxSevice: PassengerDashboardService,
    private readonly router: Router) {
  }

  /**
   * Use this hook for getting the data through services
   */
  ngOnInit() {
    console.log("ngOnInit called");
    this.passengers = this.paxSevice.getPassengers();
  }

  handleRemove(event: Passenger) {
    this.paxSevice.removePassenger(event);
    this.passengers = this.paxSevice.getPassengers();
  }

  handleEdit(event: Passenger) {
    this.paxSevice.updatePassenger(event);
    this.passengers = this.paxSevice.getPassengers();
  }
  
  handleView(event: Passenger) {
    console.log(event);
    this.router.navigate(['passengers', event.id]);
  }
}