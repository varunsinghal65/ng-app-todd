import { Component, OnInit } from '@angular/core';
import {PassengerDashboardService} from '../../passenger-dashboard.service';
import { Passenger } from '../../models/passenger.interface';


@Component({
    selector : 'app-passenger-viewer',
    styleUrls : ['passenger-viewer.component.scss'],
    template : `
    <div>
        {{ pax | json }}
    </div>
    `
})
export class PassengerViewerComponent implements OnInit{
    pax : Passenger;
    constructor(private readonly paxService: PassengerDashboardService) {
        this.pax = null;
    }

    ngOnInit() {
        this.pax = this.paxService.getPassenger(1);
    }
}