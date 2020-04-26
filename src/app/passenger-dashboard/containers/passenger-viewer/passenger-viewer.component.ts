import { Component, OnInit } from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector : 'app-passenger-viewer',
    styleUrls : ['passenger-viewer.component.scss'],
    template : `
    <button (click) = goBack()>&lsaquo;Go Back</button>
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
        private readonly route: ActivatedRoute,
        private readonly router:Router) {
        this.pax = null;
    }

    ngOnInit() {
        this.route.params.subscribe((dynamicUrlParams: Params) => {
            const paxId = Number(dynamicUrlParams.id);
            this.pax = this.paxService.getPassenger(paxId)});
    }

    handleUpdate(updatedPax: Passenger) {
        this.paxService.updatePassenger(updatedPax);
        this.pax = Object.assign({}, updatedPax);
    }

    /**
     * We are not firing/activating the route via routerLink directive, 
     * instead we are using the Imperative router API
     */
    goBack() {
        this.router.navigate(['/passengers']);
    }
}