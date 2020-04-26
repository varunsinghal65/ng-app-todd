import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

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

/**
 * 1. Now we want to achieve something like, when user visits /passengers/1, he sees the data of pax with ID 1.
 * 2. For that we will create child routes. So parent's path is "passengers" and child routes path's will be
 * relative to it.
 * 3. The first child route has a path of "", meaning its actual path is 'passengers'
 * 4. The second child route has a path of ":id", meaning its actual path is 'passengers/id'
 * 5. ':id', will allows us to capture the dynamic data (1) in the URL ('passengers/1')
 * 6. Such a child route, is called dynamic route, because ':id' is dynamic.
 */
export const ROUTES: Routes = [{
    path: 'passengers',
    children: [
        {path:'', component: PassengerDashboardComponent},
        {path:':id', component:PassengerViewerComponent}
    ]
}];

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailComponent,
        PassengerViewerComponent,
        PassengerFormComponent
    ],
    imports: [CommonModule, HttpClientModule, FormsModule, RouterModule.forChild(ROUTES)],
    exports: [],
    providers: [PassengerDashboardService]
})
export class PassengerDashboardModule {

}
