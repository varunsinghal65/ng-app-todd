import { Component, OnInit } from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
    selector : 'app-passenger-viewer',
    styleUrls : ['passenger-viewer.component.scss'],
    template : `
    <app-passenger-form 
    [detail]="pax"
    (updateEvent)="handleUpdate($event)">
    </app-passenger-form>
    `
})
export class PassengerViewerComponent implements OnInit{
    pax : Passenger;
    constructor(
        private readonly paxService: PassengerDashboardService,
        private readonly route: ActivatedRoute) {
        this.pax = null;
    }

    ngOnInit() {
        /**
         * 1. We can subscribe to the param change in URL and thus retrieve the dynamic data ":id",
         * once retrieved, we can do a http call for retreiving that pax and and init our component with that data.
         * 2. this.route.params returns observable, to which we can subscribe to receive the dynamic data as a "Params" object.
         * 3. When a user clicks <a> tag with routerLink, the route is active and the contents of 
         * the subscription fire.
         * 
         * Note 1: In real world, you will have to do a async call to real http BE, there you will
         * chain the paxService and  this.route.params observables using switchMap (rxjs add operator)
         * 
         * For e,g :
         * this.route.params.
         *    switchMap((data:passenger) => this.paxService.getPassengers(data.id)).
         *    subscribe((data:Passenger) => this.pax = data);
         */
        this.route.params.subscribe((dynamicUrlParams: Params) => {
            const paxId = Number(dynamicUrlParams.id);
            this.pax = this.paxService.getPassenger(paxId)});
    }

    handleUpdate(updatedPax: Passenger) {
        this.paxService.updatePassenger(updatedPax);
        this.pax = Object.assign({}, updatedPax);
    }
}