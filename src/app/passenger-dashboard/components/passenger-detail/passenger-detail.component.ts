import {Component, Input} from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

/**
 *  Dumb or presentational or stateless child of container component
 */
@Component({
selector : 'passenger-detail',
styleUrls : ['passenger-detail.component.scss'],
template : `
    <div>
    <ul>
      <li>
        <span
          class="status"
          [class.checked-in]="detail.checkedIn"></span>
        {{ detail.fullname }}
        <div class="date">
          Check in date:
          {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
        </div>
        <div class="children">
          Children: {{ detail.children?.length || 0 }}
        </div>
      </li>
    </ul>
    </div>
`
})
export class PassengerDetailComponent {
    @Input()
    detail : Passenger;
}