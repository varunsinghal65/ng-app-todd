import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';
import {Baggage} from '../../models/baggage.interface';

@Component({
    selector: 'app-passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
    {{ detail | json }}
    <form #formState="ngForm">

        <!-- TEXT -->
        <div> Passenger Name :
            <input 
            type="text"
            name="fullname"
            [ngModel]="detail?.fullname">
         </div>

         <!-- NUMBER -->
         <div> Passenger ID
            <input 
            type="number"
            name="id"
            [ngModel]="detail?.id">
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
        <!--
        Logic : 
        1. When user selects a option, contents of "value" attribute of <option> tag are assigned 
        to the <select> tag's state in ngForm.
        2. To display the initial value, bind the initial model to <select> via [ngModel].
        3. Then, in the <option>, bind a expression to the "selected" property of the tag.
        The expression will check if the initial model (detail?.baggage) matches any model, 
        thats being used to create the <option> tag. If yes, selected is marked true, for 
        that option tag, selecting the option in DOM.
        
        Note : The initial model (detail?.baggage) in <option> is available only because of
        [ngModel] binding in <select>.
        -->
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

            <!-- Way 2 of selecting the option based on initial model -->
            <select
            name="baggage"
            [ngModel]="detail?.baggage">
               <option 
                *ngFor="let baggage of baggages"
                [ngValue]="baggage.key"> 
                {{ baggage.value }}
               </option>
           </select>
        </div>
    </form>

    {{ formState.value | json }}`
})
export class PassengerFormComponent {

    @Input()
    detail: Passenger;

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

}
