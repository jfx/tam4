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
