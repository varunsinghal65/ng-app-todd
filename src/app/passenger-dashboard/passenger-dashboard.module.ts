import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

//container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashoard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

//stateless childern of container
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';

// services
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent, 
        PassengerViewerComponent
    ],
    imports: [CommonModule, HttpClientModule],
    exports: [PassengerDashboardComponent, PassengerViewerComponent],
    providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {

}
