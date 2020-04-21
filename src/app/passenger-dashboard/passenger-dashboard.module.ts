import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
//container
import { PassengerDashboardComponent } from './containers/passenger-dashoard.component';

//stateless childern of container
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';

// services
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
    declarations : [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent],
    imports : [CommonModule],
    exports : [PassengerDashboardComponent],
    /**
     * This is used to declare any service classes, that the declared components would like to use.
     * 
     * Also Note: A provider is an instruction to the Dependency Injection system
     * on how to obtain a value for a dependency.
     * 
     * Remove this and constructOR DI will go kaboom !!!
     */
    providers : [PassengerDashboardService]
})
export class PassengerDashboardModule {

}
