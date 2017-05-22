/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AuthService } from 'app/core/service/auth/auth.service';
import { AuthMockService } from 'app/core/service/auth/auth.mock.service';
import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      providers: [
        { provide: AuthService, useClass: AuthMockService }
      ]
    });
  });

  it('should create', inject([AuthService], async () => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));
});
