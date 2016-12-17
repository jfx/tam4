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
    this.sprintBacklog = this.af.database.list('/backlog-sprint');
  }

  getActions(): Observable<Action[]> {
    if (environment.envName === 'DEV') {
      return this.http.get(this.actionsInMemoryUrl)
        .map(this.extractData)
        .catch(this.handleError);
    }
    return this.sprintBacklog;
  }

  update(key: string, action: Action): void {
    if (environment.envName == 'DEV') {
      const url = `${this.actionsInMemoryUrl}/${action.id}`;
      this.http
        .put(url, JSON.stringify(action), { headers: this.headers })
        .map(this.extractData)
        .catch(this.handleError);
    }
    this.sprintBacklog.update(
      key, {
        title: action.title,
        todo: action.todo,
        done: action.done,
        description: action.description,
        date: action.date,
      });
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
