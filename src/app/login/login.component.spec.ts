import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from 'app/core/service/auth/auth.service';
import { AuthMockService } from 'app/core/service/auth/auth.mock.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        { provide: AuthService, useClass: AuthMockService }
      ]
    });
  });

  it('should create', inject([AuthService], async () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));
});
