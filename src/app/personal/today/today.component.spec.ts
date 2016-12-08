/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TodayComponent } from './today.component';
import { Action } from '../shared/action.model';
import { ActionService } from 'app/core/service/action/action.service';

import { PersonalModule } from '../personal.module';
import { FakeActionService, TESTACTIONS } from 'app/core/service/test/fake-action.service';

let component: TodayComponent;
let fixture: ComponentFixture<TodayComponent>;
let page: Page;

describe('TodayComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [PersonalModule],
            providers: [
                { provide: ActionService, useClass: FakeActionService },
            ]
        })
            .compileComponents()
            .then(createComponent);
    }));

    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });

    // it('should render title in a p tag', () => {
    //     let compiled = fixture.debugElement.nativeElement;
    //     expect(compiled.querySelector('p').textContent).toContain('Personal Dashboard');
    // });

    // it('should display actions', () => {
    //     let actionsRows = fixture.debugElement.queryAll(By.css('li')).map(de => de.nativeElement);
    //     expect(page.actionsRows.length).toBeGreaterThan(0);
    // });

    // it('1st action should match 1st test action', () => {
    //     let actionsRows = fixture.debugElement.queryAll(By.css('li')).map(de => de.nativeElement);
    //     expect(actionsRows[0].textContent).toContain(TESTACTIONS[0].title);
    // });
});

function createComponent() {
    fixture = TestBed.createComponent(TodayComponent);
    component = fixture.componentInstance;

    // change detection triggers ngOnInit which gets a hero
    fixture.detectChanges();

    return fixture.whenStable().then(() => {
        // got the heroes and updated component
        // change detection updates the view
        fixture.detectChanges();
        page = new Page();
    });
}

class Page {
    /** Action line elements */
    actionsRows: HTMLLIElement[];

    constructor() {
        this.actionsRows = fixture.debugElement.queryAll(By.css('li')).map(de => de.nativeElement);
    };
}
