import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { AuthMockService } from 'app/core/service/auth/auth.mock.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthMockService]
    });
  }));

  it('should create', inject([AuthMockService], async () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  }));
});
