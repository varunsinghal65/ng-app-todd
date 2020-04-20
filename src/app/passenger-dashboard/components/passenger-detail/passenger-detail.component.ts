import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

/**
 * The example shows persisting the variables of a stateless component TS class.
 *
 * Remember :
 *
 * Whenever the TS calss instance tied to a the template changes,
 * entire template is re-rendered by angular.
 *
 * Local state of a component -> the instance of the component clas tied to it's template.
 *
 * Flow :
 *----------

 * - By default, isEditMode is false.
 * - So <input>, which should display only in edit mode is not present in the dom, constructed by angular.
 * - Instead the div to show the full name is present in dom.
 * - User clicks on "edit" button, firing toggleEdit().
 * - toggleEdit() modified value of isEditMode - which is a component instance variable.
 * - angular change detection mechanism kicks in, re-renders the template.
 * - since isEditMode is now true, <input> elem is present and fullname div is absent from constructed dom.
 * - When user enters some data in <input>, due to event binding, the instance variable, "detail" is modified.
 * - When user clicks on "Done" button, toggleEdit is again fired, - triggering a re-render with editMode false.
 * - In this way we allowed the user to manipulate the local state of the component. Pretty sexy right ?
 *
 */
@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
    <ul>
      <li>
        <span
          class="status"
          [class.checked-in]="detail.checkedIn">
        </span>

        <div *ngIf="isEditMode">
          <input
            type="text"
            [value]="detail.fullname"
            (input)="onNameChange(name.value)" #name/>
         </div>
        <div *ngIf="!isEditMode">
          {{ detail.fullname }}
        </div>

        <div class="date">
          Check in date:
          {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
        </div>
        <div class="children">
          Children: {{ detail.children?.length || 0 }}
        </div>
      </li>
    </ul>

    <button (click)="toggleEdit()">{{ isEditMode ? "Done" : "Edit" }}
    </button>
`
})
export class PassengerDetailComponent {
  @Input()
  detail: Passenger;

  isEditMode: boolean = false;

  onNameChange(newName: string) {
    this.detail.fullname = newName;
  }

  toggleEdit() {
    this.isEditMode = !this.isEditMode;
  }
}