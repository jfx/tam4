/* tslint:disable:no-unused-variable */

import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AuthMockService } from './core/service/auth/auth.mock.service';

describe('App: Tam4', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [AuthMockService],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  it('should work', inject([AuthMockService], async () => {
    // it('should create the app', async(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should contain as title 'tam4.io'`, inject([AuthMockService], async() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    expect(app.footer).toContain('tam4.io');
  }));

  it('should render footer in a link tag', inject([AuthMockService], async() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('a').textContent).toContain('tam4.io');
  }));
});
