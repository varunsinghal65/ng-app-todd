import {Component, Input} from '@angular/core';
import {Passenger} from '../../models/passenger.interface';

/**
 * Dumb or presentational or stateless child of container component
 *
 */
@Component({
selector : 'passenger-count',
template : `
    <h3>Airline Passengers</h3>
    <div>
    Total checkedin : {{ totalCheckedIn() }} / {{ items.length }}
    </div>
`
})
export class PassengerCountComponent {
    @Input()
    items: Passenger[];

    totalCheckedIn() : number {
        return this.items.filter((pax)=> {
            return pax.checkedIn;
        }).length;
    }
}