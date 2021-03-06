/**
 * Copyright (c) 2017 Francois-Xavier Soubirou.
 *
 * This file is part of tam4.
 *
 * tam4 is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * tam4 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with tam4. If not, see <http://www.gnu.org/licenses/>.
 */
import { NgModule } from '@angular/core';

import { DragulaModule } from 'ng2-dragula';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { MyDatePickerModule } from 'mydatepicker';

import { SharedModule } from '../shared/shared.module';
import { PersonalRoutingModule } from './personal-routing.module';

import { ActionComponent } from './action/action.component';
import { TodayComponent } from './today/today.component';

@NgModule({
  imports: [
    DragulaModule,
    MyDatePickerModule,
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
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
