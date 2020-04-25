import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'app-passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
    {{ detail | json }}
    <form #formState="ngForm">

        <!-- TEXT -->
        <input 
         type="text"
         name="fullname"
         [ngModel]="detail?.fullname">

         <!-- NUMBER -->
         <input 
         type="number"
         name="id"
         [ngModel]="detail?.id">

         <!-- Radio buttons -->

         <!--
         Logic :
         1. if a radio button is checked by the user, the contents of the "value" attribute of the <input>
         tag are assigned to the <input> tag's state in the ngForm object.
         2. if the initial value populated via [ngModel] matches the contents of "value" attribute, 
         the radio button is shown as checked
         3. [value]="X", X will be interpreted as boolean, otherwise string.
         -->

         <!-- Radio for checkin -->
         <label>
            <input 
            type="radio"
            [value]="true"
            name="checkedIn"
            [ngModel]="detail?.checkedIn">
            Yes
         </label>

         <label>
            <input 
            type="radio"
            [value]="false"
            name="checkedIn"
            [ngModel]="detail?.checkedIn">
            No
        </label>

        <!-- Edit for checkindate -->
        <div *ngIf="formState.value.checkedIn">
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
    </form>
    {{ formState.value | json }}`
})
export class PassengerFormComponent {

    @Input()
    detail: Passenger;

    constructor() {
        this.detail = null;
    }

}
