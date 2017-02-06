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
import { Component, Input, OnInit, ViewChild } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { ModalDirective } from 'ng2-bootstrap';

import * as moment from 'moment';

import { ActionService } from 'app/core/service/action/action.service';
import { Action } from '../shared/action.model';

@Component({
  selector: 'app-personal-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  @Input()
  action: Action;
  @Input()
  arrayActions: Array<Action>;
  @Input()
  backlogPrefix: string;
  @ViewChild('deleteModal')
  public deleteModal: ModalDirective;
  edit: boolean = false;
  actionBackup: Action;

  private myDatePickerNormalOptions = {
    dateFormat: 'dd/mm/yyyy',
    selectionTxtFontSize: '14px',
    showDateFormatPlaceholder: true,
    editableMonthAndYear: true,
    minYear: 2016,
  };

  constructor(private actionService: ActionService) {
  }

  ngOnInit() {
    // Add -> open edit form
    if (this.isAdd()) {
      this.edit = true;
    }
  }

  onSubmit(): void {
    if (this.isAdd()) {
      this.actionService.createInSprint(this.action);
    } else {
      this.actionService.updateInSprint(this.action);
    }
    this.unsetEdit();
  }

  close(): void {
    // Add -> remove it from Array
    if (this.isAdd()) {
      const index = this.arrayActions.findIndex(action => ((this.action.$key === '') && (this.action.id === '')));
      this.arrayActions.splice(index, 1);
    } else {
      this.action.$key = this.actionBackup.$key;
      this.action.id = this.actionBackup.id;
      this.action.title = this.actionBackup.title;
      this.action.todo = this.actionBackup.todo;
      this.action.done = this.actionBackup.done;
      this.action.position = this.actionBackup.position;
      this.action.description = this.actionBackup.description;
      this.action.date = this.actionBackup.date;

      this.unsetEdit();
    }
  }

  setEdit(): void {
    this.actionBackup = new Action(
      this.action.$key,
      this.action.id,
      this.action.title,
      this.action.todo,
      this.action.done,
      this.action.position,
      this.action.description,
      this.action.date
    );
    this.edit = true;
  }

  unsetEdit(): void {
    this.edit = false;
  }

  getId(): string {
    return this.action.position.toString();
  }

  displayDate(): string {
    const sqlDate = moment(this.action.date, 'YYYY-MM-DD');

    if (!sqlDate.isValid()) {
      return '';
    }
    return sqlDate.format('DD/MM/YYYY');
  }

  onDateChanged(event: any): void {
    if (event.formatted !== '') {
      const formatedDate = moment(event.formatted, 'DD/MM/YYYY');

      if (!formatedDate.isValid()) {
        this.action.date = '';
      }
      this.action.date = formatedDate.format('YYYY-MM-DD');
    } else {
      this.action.date = '';
    }
  }

  public showDeleteModal(): void {
    this.deleteModal.show();
  }

  public hideDeleteModal(): void {
    this.deleteModal.hide();
  }

  delete(): void {
    this.actionService.deleteInSprint(this.action);
    this.deleteModal.hide();
  }

  isAdd(): boolean {
    return ((this.action.$key === '') && (this.action.id === ''));
  }
}
