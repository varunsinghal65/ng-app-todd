import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { PassengerDashboardComponent } from './containers/passenger-dashoard.component';

@NgModule({
    declarations : [PassengerDashboardComponent],
    imports : [CommonModule],
    /**
     * We want passenger-dashboard component to be rendered in a external component's template, thats located
     * This component is outside this module.
     *
     * Its not sufficient to import Passenger-dashboard.module in external module,
     * We also need to tell angulat to expose
     * the passenger-dashboard component, so that this component can be rednered in
     * an external component belonging to other module.
     */
    exports : [PassengerDashboardComponent]
})
export class PassengerDashboardModule {

}
