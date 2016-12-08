import { NgModule } from '@angular/core';

import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

import { MyDatePickerModule } from 'mydatepicker';

import { SharedModule } from '../shared/shared.module';
import { PersonalRoutingModule } from './personal-routing.module';

import { ActionComponent } from './action/action.component';
import { TodayComponent } from './today/today.component';

@NgModule({
  imports: [
    MyDatePickerModule,
    TooltipModule,
    PersonalRoutingModule,
    SharedModule,
  ],
  declarations: [
    ActionComponent,
    TodayComponent,
  ],
  providers: []
})
export class PersonalModule { }
