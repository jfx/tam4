/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { ModalModule } from 'ngx-bootstrap/modal';

import { ActionComponent } from './action.component';
import { Action } from '../shared/action.model';
import { ActionService } from 'app/core/service/action/action.service';
import { ActionMockService } from 'app/core/service/action/action.mock.service';
import { AlertService } from 'app/core/service/alert/alert.service';
import { AuthService } from 'app/core/service/auth/auth.service';
import { AuthMockService } from 'app/core/service/auth/auth.mock.service';

describe('ActionComponent', () => {
  let component: ActionComponent;
  let fixture: ComponentFixture<ActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        ModalModule.forRoot(),
      ],
      declarations: [ActionComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ActionService, useClass: ActionMockService },
        AlertService,
      ]
    });
  });


  it('should create', inject([ActionService], async () => {
    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;
    component.action = new Action('-KhJCwYISInXOfbDW9SN', '11', 'Title 1', 1, 2, 1, 'Desc 1', '31/12/2016');
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));
});
