import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})

export class DatepickerComponent {

  @Input()
  dateModel: Date;
  @Input()
  label: string;
  @Output()
  dateModelChange: EventEmitter<string> = new EventEmitter();
  private showDatepicker: boolean = false;

  showPopup() {
    this.showDatepicker = true;
  }

  hidePopup(event) {
    this.showDatepicker = false;
    this.dateModel = event;
    this.dateModelChange.emit(event)
  }
}
