import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Necessary for in-memory-web-api
import { HttpModule } from '@angular/http';

import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

import { PersonalRoutingModule } from './personal-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';

import { DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DatepickerComponent } from '../core/datepicker/datepicker.component';

import { ActionComponent } from './action/action.component';
import { ActionService } from './shared/action.service';
import { TodayComponent } from './today/today.component';

@NgModule({
  imports: [
    CommonModule,
    DatepickerModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    TooltipModule,
    PersonalRoutingModule,
  ],
  declarations: [
    DatepickerComponent,
    ActionComponent,
    TodayComponent,
  ],
  exports: [
    TodayComponent,
  ],
  providers: [ActionService],
  bootstrap: []
})
export class PersonalModule { }
