/* tslint:disable:no-unused-variable */

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Action } from 'app/personal/shared/action.model';
import { ActionService } from '../action/action.service';

export let TESTSPRINTACTIONS: Action[] = [
    new Action('41', '', 'Title 1', 1, 2, 2, 'Desc 1'),
    new Action('42', '', 'Title 2', 3, 4, 1, 'Desc 2', '2016-12-31'),
];

export let TESTTODAYACTIONS: Action[] = [
    new Action('51', '', 'Title A', 1, 2, 2, 'Desc A'),
    new Action('52', '', 'Title B', 3, 4, 1, 'Desc B', '2017-01-01'),
];

export class FakeActionService {

    getSprintActions(): Observable<Action[]> {
        return Observable.of(TESTSPRINTACTIONS);
    }

    getTodayActions(): Observable<Action[]> {
        return Observable.of(TESTTODAYACTIONS);
    }
}
