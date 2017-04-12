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

import { DragulaService } from 'ng2-dragula';

import { Action } from '../shared/action.model';
import { ActionService } from 'app/core/service/action/action.service';
import { Alert } from 'app/core/shared/alert.model';
import { AlertService } from 'app/core/service/alert/alert.service';
import { PositionArray } from 'app/core/util/position-array';

@Component({
  selector: 'app-personal-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css'],
})
export class TodayComponent implements OnInit {

  sprintActions: Array<Action> = [];
  todayActions: Array<Action> = [];
  sprintPrefix = 'sp';
  todayPrefix = 'td';

  constructor(
    private actionService: ActionService,
    private dragulaService: DragulaService,
    private alertService: AlertService
  ) {

    dragulaService.dropModel.subscribe((value: any) => {
      this.onDropModel(value.slice(1));
    });

    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  ngOnInit(): void {
    this.getSprintActions();
    this.getTodayActions();
  }

  getSprintActions(): void {
    this.actionService.getSprintActions()
      .map(actions => {
        this.sprintActions = actions;
        PositionArray.sort(this.sprintActions);
      })
      .toPromise()
      .catch(err => {
        console.error(err);
        const alert = new Alert();
        this.alertService.add(alert);
      });
  }

  getTodayActions(): void {
    this.actionService.getTodayActions()
      .map(actions => {
        this.todayActions = actions;
        PositionArray.sort(this.todayActions);
      })
      .toPromise()
      .catch(err => {
        console.error(err);
        const alert = new Alert();
        this.alertService.add(alert);
      });
  }

  private onDropModel(args: any): void {
    const [el, target, source] = args;
    const actionKey = (el.attributes.id.nodeValue).substr(3);
    const sourceId = source.attributes.id.nodeValue;
    const targetId = target.attributes.id.nodeValue;

    if (targetId === this.sprintPrefix) {
      const index = this.sprintActions.findIndex(action => (action.$key === actionKey));
      this.updatePosition(this.sprintActions, index);
      PositionArray.sort(this.sprintActions);

      if (targetId === sourceId) {
        this.actionService.updateInSprint(this.sprintActions[index]);
      } else {
        this.actionService.createInSprint(this.sprintActions[index]);
        this.actionService.deleteInToday(this.sprintActions[index]);
      }
    } else if (targetId === this.todayPrefix) {
      const index = this.todayActions.findIndex(action => (action.$key === actionKey));
      this.updatePosition(this.todayActions, index);
      PositionArray.sort(this.todayActions);

      if (targetId === sourceId) {
        this.actionService.updateInToday(this.todayActions[index]);
      } else {
        this.actionService.createInToday(this.todayActions[index]);
        this.actionService.deleteInSprint(this.todayActions[index]);
      }
    }
  }

  private onRemoveModel(args: any): void {
    console.log('Error onRemoveModel !');
    const alert = new Alert();
    this.alertService.add(alert);
  }

  add2Sprint(): void {
    this.add(this.sprintActions);
  }

  add2Today(): void {
    this.add(this.todayActions);
  }

  private add(arrayActions: Array<Action>): void {
    const position = PositionArray.getNextPosition(arrayActions);
    const action = new Action('', '', '', 1, 0, position, '', '');
    arrayActions.push(action);
    PositionArray.sort(arrayActions);
  }

  private updatePosition(arrayActions: Array<Action>, index: number): void {
    if (index === 0) {
      arrayActions[index].position = PositionArray.getNextPosition(arrayActions);
    } else if (index === (arrayActions.length - 1)) {
      arrayActions[index].position = PositionArray.getFirstPosition(arrayActions);

    } else {
      arrayActions[index].position = PositionArray.getPositionAt(arrayActions, index);
    }
  }
}
