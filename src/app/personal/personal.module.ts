import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// Necessary for in-memory-web-api
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ActionService } from './shared/action.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    DashboardComponent,
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [ActionService],
  bootstrap: []
})
export class PersonalModule { }
