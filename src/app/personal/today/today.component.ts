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

  actions: Action[];

  constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.getActions();
  }

  getActions(): void {
    this.actionService.getActions()
      .map(actions => {
        this.actions = actions;
      })
      .toPromise()
      .catch(err => {
        console.error(err);
      });
  }
}
