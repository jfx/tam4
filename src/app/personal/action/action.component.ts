import { Component, Input } from '@angular/core';

import { Action } from '../shared/action.model';

@Component({
  selector: 'app-personal-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent {

  @Input()
  action: Action;
  edit: boolean = false;
  todos = [0.25, 0.5, 1, 2, 3, 5, 8, 13, 20];

  onSubmit(): void {
    this.unsetEdit();
  }

  setEdit(): void {
    this.edit = true;
  }

  unsetEdit(): void {
    this.edit = false;
  }
}
