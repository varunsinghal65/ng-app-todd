import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

//container
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashoard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

//stateless childern of container
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// services
import { PassengerDashboardService } from './passenger-dashboard.service';
import { importType } from '@angular/compiler/src/output/output_ast';

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent,
        PassengerFormComponent
    ],
    imports: [CommonModule, HttpClientModule, FormsModule],
    exports: [PassengerDashboardComponent, PassengerViewerComponent],
    providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {

}
