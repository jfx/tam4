import { Component, OnInit } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Action } from '../shared/action.model';
import { ActionService } from '../shared/action.service';
import { FakeActionService, TESTACTIONS } from '../shared/test/fake-action.service';

@Component({
  selector: 'app-personal-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  actions: Action[];

   constructor(private actionService: ActionService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
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
