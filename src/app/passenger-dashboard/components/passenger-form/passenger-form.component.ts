import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import {Baggage} from '../../models/baggage.interface';

@Component({
    selector: 'app-passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
    {{ detail | json }}
    <!-- ngSubmit event is fired, when user clicks on submit button,
    on submit we, emit notify the parent stateful component with the updated pax data, 
    by emitting a update event, that the parent is listening to -->
    <form #formState="ngForm" (ngSubmit)="handleFormSubmit(formState.value, formState.valid)">

        <!-- TEXT -->
        <div> Passenger Name :
            <input 
            type="text"
            name="fullname"
            required
            #fullName = "ngModel"
            [ngModel]="detail?.fullname">
            <div *ngIf="fullName.errors?.required && fullName.dirty" class = "error">
              Passenger name is needed
            </div>
            ngModel.errors : {{ fullName.errors | json }}
         </div>

         <!-- NUMBER -->
         <div> Passenger ID
            <input
            type="number"
            name="id"
            required
            #id="ngModel"
            [ngModel]="detail?.id">
            <div *ngIf="id.errors?.required && id.dirty" class = "error">
                Passenger name is needed
            </div>
         </div>

         <!-- Checkbox -->
         <div> Checked in status :
            <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn">
        </div>

        <!-- Edit for checkindate -->
        <div *ngIf="formState.value.checkedIn"> Checkedin Date : 
            <input
             type="number"
             name="checkInDate"
             [ngModel]="detail?.checkInDate">
        </div>

        <!-- radio for gender -->
        <label>
            <input 
            type="radio"
            value="female"
            name="gender"
            [ngModel]="detail?.gender">
            female
        </label>

        <label>
            <input 
            type="radio"
            value="male"
            name="gender"
            [ngModel]="detail?.gender">
            male
        </label>

        <!-- Select for baggage -->
        <div> Baggage : 
            <!-- Way 1 of selecting the option based on initial model 
            Note: [value]="X", means, angular will interpret X as non string value.
            [value] = "X", means, ng will interpret X as string value. 
            -->
            <select
             name="baggage"
             [ngModel]="detail?.baggage">
                <option 
                 *ngFor="let baggage of baggages"
                  [value]="baggage.key"
                  [selected]="baggage.key === detail?.baggage">
                    {{baggage.value}}
                </option>
            </select>
        </div>


        <!-- Form validity -->
        <div>
          {{ formState.value | json }}<br>
          Valid : {{ formState.valid }} <br>
          Invalid : {{ formState.invalid }}
        </div>

        <!-- Submit button -->
        <button type="submit" [disabled]="formState.invalid">Update Passenger</button>
    </form>
    `

})
export class PassengerFormComponent {

    @Input()
    detail: Passenger;

    @Output()
    updateEvent : EventEmitter<Passenger> = new EventEmitter<Passenger>();

    readonly baggages: Baggage[] = [{
        key: 'none',
        value: 'No baggage'
    }, {
        key: 'hand-only',
        value: 'Hand baggage'
    }, {
        key: 'hold-only',
        value: 'Hold baggage'
    }, {
        key: 'hand-and-hold',
        value: 'Hand and Hold baggage'
    }];

    constructor() {
        this.detail = null;
    }

    handleFormSubmit(updatedPassenger: Passenger, isValid:boolean) {
        if (isValid) {
            this.updateEvent.emit(updatedPassenger);
        }
    }
}
