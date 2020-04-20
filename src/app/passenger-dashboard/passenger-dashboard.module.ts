import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//container
import { PassengerDashboardComponent } from './containers/passenger-dashoard.component';

//stateless childern of container
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';

@NgModule({
    declarations : [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent],
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
