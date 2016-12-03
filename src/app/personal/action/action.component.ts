import { Component, Input } from '@angular/core';

import * as moment from 'moment';

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
  private myDatePickerNormalOptions = {
    todayBtnTxt: 'Today',
    dateFormat: 'dd/mm/yyyy',
    firstDayOfWeek: 'mo',
    sunHighlight: true,
    showCurrentDay: true,
    height: '34px',
    width: '260px',
    selectionTxtFontSize: '14px',
    alignSelectorRight: false,
    indicateInvalidDate: true,
    showDateFormatPlaceholder: true,
    editableMonthAndYear: true,
    minYear: 1900,
    componentDisabled: false
  };

  onSubmit(): void {
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
