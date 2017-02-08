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
import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from 'app/../environments/environment';

import { Action } from 'app/personal/shared/action.model';

@Injectable()
export class ActionMockService {
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private sprintActionsUrl = environment.mockServer + '/sprint-actions';
  private todayActionsUrl = environment.mockServer + '/today-actions';

  constructor(private http: Http) { }

  getSprintActions(): Observable<Action[]> {
    return this.http.get(this.sprintActionsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getTodayActions(): Observable<Action[]> {
    return this.http.get(this.todayActionsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  createInSprint(action: Action): void {
    this.create(action, this.sprintActionsUrl);
  }

  createInToday(action: Action): void {
    this.create(action, this.todayActionsUrl);
  }

  private create(action: Action, url: any) {
    this.http
      .post(url, JSON.stringify(action), this.options)
      .subscribe(res => { action.id = this.extractData(res).id; }, err => this.handleError(err));
  }

  updateInSprint(action: Action): void {
    this.update(action, this.sprintActionsUrl);
  }

  updateInToday(action: Action): void {
    this.update(action, this.todayActionsUrl);
  }

  private update(action: Action, url: any): void {
    this.http
      .put(`${url}/${action.id}`, JSON.stringify(action), this.options)
      .subscribe(res => this.extractData(res), err => this.handleError(err));
  }

  deleteInSprint(action: Action): void {
    this.delete(action, this.sprintActionsUrl);
  }

  deleteInToday(action: Action): void {
    this.delete(action, this.todayActionsUrl);
  }

  private delete(action: Action, url: any): void {
    this.http
      .delete(`${url}/${action.id}`, this.options)
      .subscribe(res => this.extractData(res), err => this.handleError(err));
  }

  private extractData(res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
