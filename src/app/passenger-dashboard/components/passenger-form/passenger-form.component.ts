import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'app-passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
    <form>
        <div>
        Form!
        {{ detail | json }}
        </div>
    </form>
    `
})
export class PassengerFormComponent {

    @Input()
    detail: Passenger;

    constructor() {
        this.detail = null;
    }

}
