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
  sprintPrefix: string = 'sp';
  todayPrefix: string = 'td';

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.getSprintActions();
    this.getTodayActions();
  }

  getSprintActions(): void {
    this.actionService.getSprintActions()
      .map(actions => {
        this.sprintActions = actions;
        this.sortArrayActions(this.sprintActions);
      })
      .toPromise()
      .catch(err => {
        console.error(err);
      });
  }

  getTodayActions(): void {
    this.actionService.getTodayActions()
      .map(actions => {
        this.todayActions = actions;
        this.sortArrayActions(this.todayActions);
      })
      .toPromise()
      .catch(err => {
        console.error(err);
      });
  }

  add2Sprint(): void {
    const position = this.getNextAvalaiblePosition(this.sprintActions);
    const action = new Action('', '', '', 1, 0, position, '', '');
    this.sprintActions.push(action);
    this.sortArrayActions(this.sprintActions);
  }

  sortArrayActions(arrayActions: Array<Action>): void {
    arrayActions.sort((a, b): number => {
      if (a.position < b.position) { return 1; }
      if (a.position > b.position) { return -1; }
      return 0;
    });
  }

  getNextAvalaiblePosition(arrayActions: Array<Action>): number {
    if (arrayActions.length === 0) {
      return 1;
    } else {
      let maxPosition = -100000000;
      for (let i = 0; i < arrayActions.length; i++) {
        if (arrayActions[i].position > maxPosition) {
          maxPosition = arrayActions[i].position;
        }
      }
      return Math.ceil(maxPosition + 1);
    }
  }
}
