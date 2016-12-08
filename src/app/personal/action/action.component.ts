import { Component, Input } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import * as moment from 'moment';

import { ActionService } from 'app/core/service/action/action.service';
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

  private myDatePickerNormalOptions = {
    dateFormat: 'dd/mm/yyyy',
    selectionTxtFontSize: '14px',
    showDateFormatPlaceholder: true,
    editableMonthAndYear: true,
    minYear: 2016,
  };

  constructor(
    private actionService: ActionService
  ) { }


  onSubmit(): void {
    this.actionService.update(this.action);
    this.unsetEdit();
  }

  close(): void {
    this.actionService.getAction(this.action.id)
      .map(action => {
        this.action = action;
      })
      .toPromise()
      .catch(err => {
        console.error(err);
      });
    this.unsetEdit();
  }

  setEdit(): void {
    this.edit = true;
  }

  unsetEdit(): void {
    this.edit = false;
  }

  displayDate(): string {
    let sqlDate = moment(this.action.date, 'YYYY-MM-DD');

    if (!sqlDate.isValid()) {
      return '';
    }
    return sqlDate.format('DD/MM/YYYY');
  }

  onDateChanged(event: any): void {
    if (event.formatted != '') {
      let formatedDate = moment(event.formatted, 'DD/MM/YYYY');

      if (!formatedDate.isValid()) {
        this.action.date = '';
      }
      this.action.date = formatedDate.format('YYYY-MM-DD');
    } else {
      this.action.date = '';
    }
  }
}
