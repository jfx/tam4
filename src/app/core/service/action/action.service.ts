import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Action } from 'app/personal/shared/action.model';

@Injectable()
export class ActionService {
  private actionsUrl = 'app/actions';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getActions(): Observable<Action[]> {
    return this.http.get(this.actionsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAction(id: number): Observable<Action> {
    const url = `${this.actionsUrl}/${id}`;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  update(action: Action): Observable<Action[]> {
    const url = `${this.actionsUrl}/${action.id}`;
    return this.http
      .put(url, JSON.stringify(action), { headers: this.headers })
      .map(this.extractData)
      .catch(this.handleError);
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
