/* tslint:disable:no-unused-variable */
import { async, inject, TestBed } from '@angular/core/testing';

import { TodayComponent } from './today.component';
import { ActionService } from 'app/core/service/action/action.service';
import { AlertService } from 'app/core/service/alert/alert.service';

import { PersonalModule } from '../personal.module';
import { FakeActionService } from 'app/core/service/test/fake-action.service';


describe('TodayComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                PersonalModule,
            ],
            providers: [
                AlertService,
                { provide: ActionService, useClass: FakeActionService },
            ]
        });
    });

    it('should create', inject([ActionService], async () => {
        const fixture = TestBed.createComponent(TodayComponent);
        const component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    }));
});
