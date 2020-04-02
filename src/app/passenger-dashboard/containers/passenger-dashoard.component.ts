import {Component, OnInit} from '@angular/core';
import {Passenger} from '../../passenger-dashboard/models/passenger.interface';
import {PassengerDashboardService} from '../services/passenger-dashboard.service';


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
   *
   * @param passengerDashboardSvc
   */
  constructor (private passengerDashboardSvc : PassengerDashboardService) {
    this.passengerDashboardSvc = passengerDashboardSvc;
  }
  /**
   * Flow :
   *
   * Tell service to get pax, service returns observable, attach your callback though subscribe api of observable.
   * Callback is called when the data is received from server, meanwhile, code execution proceeds.
   */
  ngOnInit() {
    this.passengerDashboardSvc.getPassengers().subscribe((data : Passenger[])=>{
      this.passengers = data;
    });
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
  }
}