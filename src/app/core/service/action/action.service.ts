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
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Observable } from 'rxjs/Observable';

import { environment } from 'app/../environments/environment';

import { Action } from 'app/personal/shared/action.model';

@Injectable()
export class ActionService {
  private sprintBacklog: FirebaseListObservable<any>;
  private todayBacklog: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.sprintBacklog = this.af.database.list('/backlog-sprint');
    this.todayBacklog = this.af.database.list('/backlog-today');
  }

  getSprintActions(): Observable<Action[]> {
    return this.sprintBacklog;
  }

  getTodayActions(): Observable<Action[]> {
    return this.todayBacklog;
  }

  createInSprint(action: Action): void {
    this.sprintBacklog.push(
      {
        title: action.title,
        todo: action.todo,
        done: action.done,
        position: action.position,
        description: action.description,
        date: action.date,
      }
    );
  }

  updateInSprint(action: Action): void {
    this.sprintBacklog.update(
      action.$key,
      {
        title: action.title,
        todo: action.todo,
        done: action.done,
        position: action.position,
        description: action.description,
        date: action.date,
      }
    );
  }

  deleteInSprint(action: Action): void {
    this.sprintBacklog.remove(action.$key);
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    const body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    const errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
