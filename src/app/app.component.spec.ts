/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { AuthService } from './core/service/auth/auth.service';
import { AuthMockService } from './core/service/auth/auth.mock.service';

describe('App: Tam4', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: AuthService, useClass: AuthMockService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should work', inject([AuthService], async () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should contain as title 'tam4.io'`, inject([AuthService], async () => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app.footer).toContain('tam4.io');
  }));
});
