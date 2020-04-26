import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Passenger } from '../../models/passenger.interface';

/**
 *To solve this problem : local state changes are comprisiming container state(check comment in passenger-dashboard template)
 *
 * - We use ngOnChnages to solve this, its a life cyclye hook that;s called even before ngOnInit
 * - It thus, allows us to intercept the incoming input from parent. In our case "detail" ,
 * the one decorated with @Input in this class.
 * - On interception, the hook provides us a "changes" object, since
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
      </li>
    </ul>

    <!-- Edit button -->
    <button (click)="toggleEdit()">{{ isEditMode ? "Done" : "Edit" }}
    </button>

    <!-- Remove button -->
    <button (click)="onRemove()">Remove
    </button>

    <!-- View button -->
    <button (click)="onView()">View
    </button>
`
})
export class PassengerDetailComponent implements OnChanges, OnInit{

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
  remove: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output()
  edit: EventEmitter<Passenger> = new EventEmitter<Passenger>();
  @Output()
  view: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  isEditMode: boolean = false;

  /**
   * We dont use ng on init, because ngOnChanges is called before ngOnInit and
   * inside ngOnChanges, both child's data and data sent by parent are availble,
   * thus, we break the binding between them in ngOnChanges, so that child's "detail" and parent's "detail" do not point
   * to the same reference and thus cause pollution.
   */
  ngOnInit() {
    console.log("ngoninit called");
  }

  /**
   * This hook will be called by angular before the component is even initialized.
   *
   * So, in this method,  we will retrieve the data of the child, and assign it the data coming from parent using
   * an immuatble clone operation.
   *
   * This will remove the binding between the child data and parent data, and, they will stop pointing to the same memory reference
   */
  ngOnChanges(changes) {
    console.log("ngonchanges called");
    this.detail = Object.assign({}, changes.detail.currentValue);
  }

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

  onView() {
    this.view.emit(this.detail);
  }
}