import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'app-passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
    {{ detail | json }}
    <!--
    - Angular provides a directive ngForm.
    - ngForm keeps track of state of the form and validations inside it.
    - We export the state with #formState="ngForm".
    - Every <input> tag inside form will have its value stored in a property in formState.
    - The name of the property is determined by the "name" attribute in <input> tag.
    - For binding the <input> tag state with "formState", angular directive ngModel is used.
    - So, any change in <input> tag state, will cuase change in formState ==> 1 way databinding.
    - To show initial value in the <input> tags, we can also bind to ngModel ==> [ngModel]="TS variable"
    -->
    <form #formState="ngForm">
        <input 
         type="text"
         name="fullname"
         [ngModel]="detail?.fullname">
    </form>
    {{ formState.value | json }}
    <!-- Summary -->
    <!--
    <input [value]="TS variable"> and <input [ngModel]="TS variable"> are same.
    In above form example,
    1 way databinding from <input>'s state (value) to formState 
         ==> you type something in input, formState updated
    1 way dataBinding from "detail.fullName" to <input>'s state (value)
         ==> if in the TS, detail.fullName is modified, <input>'s state modifed, formState modifed
    -->
    `
})
export class PassengerFormComponent {

    @Input()
    detail: Passenger;

    constructor() {
        this.detail = null;
    }

}
