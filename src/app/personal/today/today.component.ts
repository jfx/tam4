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
 * eco4 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with eco4. If not, see <http://www.gnu.org/licenses/>.
 */
import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Action } from '../shared/action.model';
import { ActionService } from 'app/core/service/action/action.service';

@Component({
  selector: 'app-personal-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
})
export class TodayComponent implements OnInit {

  sprintActions: Array<Action>;
  todayActions: Array<Action> = [];

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.getSprintActions();
    this.getTodayActions();
  }

  getSprintActions(): void {
    this.actionService.getActions()
      .map(actions => {
        this.sprintActions = actions;
      })
      .toPromise()
      .catch(err => {
        console.error(err);
      });
  }

  getTodayActions(): void {
    this.actionService.getActions()
      .map(actions => {
        this.todayActions = actions;
        // Order by position
        this.todayActions.sort((a, b): number => {
          if (a.position < b.position) { return 1; }
          if (a.position > b.position) { return -1; }
          return 0;
        });
      })
      .toPromise()
      .catch(err => {
        console.error(err);
      });
  }
}
