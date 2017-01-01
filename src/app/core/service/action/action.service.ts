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
import { Headers, Http, Response } from '@angular/http';

import { AngularFire } from 'angularfire2';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from 'app/../environments/environment';

import { Action } from 'app/personal/shared/action.model';

@Injectable()
export class ActionService {
  private actionsInMemoryUrl = 'app/actions';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  private sprintBacklog;

  constructor(private http: Http, private af: AngularFire) {
    if ((environment.envName === 'TEST') || (environment.envName === 'PROD')) {
      this.sprintBacklog = this.af.database.list('/backlog-sprint');
    }
  }

  getActions(): Observable<Action[]> {
    if ((environment.envName !== 'TEST') && (environment.envName !== 'PROD')) {
      return this.http.get(this.actionsInMemoryUrl)
        .map(this.extractData)
        .catch(this.handleError);
    }
    return this.sprintBacklog;
  }

  update(action: Action): void {
    if ((environment.envName !== 'TEST') && (environment.envName !== 'PROD')) {
      const url = `${this.actionsInMemoryUrl}/${action.$key}`;
      this.http
        .put(url, JSON.stringify(action), { headers: this.headers })
        .map(this.extractData)
        .catch(this.handleError);
    } else {
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
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    return body.data || {};
  }

  private handleError(error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
