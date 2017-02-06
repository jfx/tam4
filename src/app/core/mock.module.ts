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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Necessary for ActionMockService
import { HttpModule } from '@angular/http';

import { ActionService } from './service/action/action.service';
import { ActionMockService } from './service/action/action.mock.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [{ provide: ActionService, useClass: ActionMockService }]
})
export class MockModule { }
