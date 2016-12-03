import { NgModule } from '@angular/core';
// Necessary for in-memory-web-api
import { HttpModule } from '@angular/http';

import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

import { MyDatePickerModule } from 'mydatepicker';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';

import { SharedModule } from '../shared/shared.module';

import { PersonalRoutingModule } from './personal-routing.module';

import { ActionComponent } from './action/action.component';
import { ActionService } from './shared/action.service';
import { TodayComponent } from './today/today.component';

@NgModule({
  imports: [
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    MyDatePickerModule,
    TooltipModule,
    PersonalRoutingModule,
    SharedModule,
  ],
  declarations: [
    ActionComponent,
    TodayComponent,
  ],
  providers: [ActionService]
})
export class PersonalModule { }
