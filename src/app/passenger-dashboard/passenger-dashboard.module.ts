import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//container
import { PassengerDashboardComponent } from './containers/passenger-dashoard.component';

//stateless childern of container
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';

//services
import { PassengerDashboardService } from './services/passenger-dashboard.service';

@NgModule({
    declarations : [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent],
    imports : [CommonModule],
    exports : [PassengerDashboardComponent],
    /**
     * This is used to declare any service classes, that the declared components would like to use.
     */
    providers : [PassengerDashboardService]
})
export class PassengerDashboardModule {

}
