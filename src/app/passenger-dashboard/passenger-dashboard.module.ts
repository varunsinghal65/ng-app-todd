import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

//container
import { PassengerDashboardComponent } from './containers/passenger-dashoard.component';

//stateless childern of container
import {PassengerCountComponent} from './components/passenger-count/passenger-count.component';
import {PassengerDetailComponent} from './components/passenger-detail/passenger-detail.component';

//services
import { PassengerDashboardService } from './services/passenger-dashboard.service';

@NgModule({
    declarations : [PassengerDashboardComponent, PassengerCountComponent, PassengerDetailComponent],
    imports : [CommonModule, HttpClientModule],
    exports : [PassengerDashboardComponent],
    /**
     * This is used to declare any service classes, that the declared components would like to use.
     */
    providers : [PassengerDashboardService]
})
export class PassengerDashboardModule {

}
