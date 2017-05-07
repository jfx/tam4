/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { ModalModule } from 'ng2-bootstrap/modal';

import { ActionComponent } from './action.component';
import { Action } from '../shared/action.model';
import { ActionService } from 'app/core/service/action/action.service';

import { environment } from 'app/../environments/environment';
export const firebaseConfig = {
  apiKey: environment.apiKey,
  authDomain: environment.authDomain,
  databaseURL: environment.databaseURL,
  storageBucket: environment.storageBucket
};

describe('ActionComponent', () => {
  let component: ActionComponent;
  let fixture: ComponentFixture<ActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        ModalModule.forRoot(),
      ],
      declarations: [ActionComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ActionService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionComponent);
    component = fixture.componentInstance;
    component.action = new Action('-KhJCwYISInXOfbDW9SN', '11', 'Title 1', 1, 2, 1, 'Desc 1', '31/12/2016');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
