import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DatepickerComponent } from './datepicker/datepicker.component';

@NgModule({
  imports: [
    CommonModule,
    DatepickerModule,
    FormsModule,
  ],
  declarations: [
    DatepickerComponent,
  ],
  exports: [
    CommonModule,
    DatepickerComponent,
    FormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
