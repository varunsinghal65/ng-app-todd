import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

/**
 * The example shows how to notify the parent conatiner from child stateless containers.
 *
 * Flow :
 * ----------
 * Once the user clicks on edit or remove, local state changes, we need to notify the parent container.
 * We do that with the help of event emitters and outputs.
 *
 * - User clicks on "Remove", on OnRemove() is called.
 * - in onRemove() we emit the event, and specify the latest "detail" instance in argument.
 * - in container - passenger-dashboard, event binding is present something like this
 *
 *    <passenger-detail (remove)="handleRemove()">
 *
 * - this event binding causes handleRemove() of class "passenger-dashboard" to be trigerred as a callback, whenever
 * - "remove" event is emitted from passenger-detail
 * - the container("passenger-dashboard") can then go ahead, remove the detail from it's instance, triggering a re-render
 * of the ui.
 * - since the "passengers" list now does not have the "detail" object now, the dom does not incude it and removal is done.
 *
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

    <!-- Edit button -->
    <button (click)="toggleEdit()">{{ isEditMode ? "Done" : "Edit" }}
    </button>

    <!-- Remove button -->
    <button (click)="onRemove()">Remove
    </button>
`
})
export class PassengerDetailComponent {

  /**
   * Inputs to component from parent - downward flow of data
   */
  @Input()
  detail: Passenger;

  /**
  * Outputs of the component - used to fire eventon local state changes,
  * so that parent container can be updated/notified
  */
  @Output()
  remove: EventEmitter<any> = new EventEmitter();
  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  isEditMode: boolean = false;

  onNameChange(newName: string) {
    this.detail.fullname = newName;
  }

  toggleEdit() {
    if (this.isEditMode) {
      this.edit.emit(this.detail);
    }
    this.isEditMode = !this.isEditMode;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}