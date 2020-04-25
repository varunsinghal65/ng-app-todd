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

         <!-- Checkbox -->
         <!-- 
         1. Checkboxes control can have only 2 values : true or false, so no need of "value" attribute.
         2. To summarize, in template driven forms, template form data is the source of truth,
          meaning, template data will be the one that will be updated in the data model
          and sent for persistence to backend.
         -->
        <label>Checked in :</label> 
        <input
        type="checkbox"
        name="checkedIn"
        [ngModel]="detail?.checkedIn">

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
