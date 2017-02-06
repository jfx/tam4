/* tslint:disable:no-unused-variable */

import { Observable } from 'rxjs/Observable';

import { Action } from 'app/personal/shared/action.model';
import { ActionService } from '../action/action.service';

export let TESTACTIONS: Action[] = [
    new Action('41', '', 'Title 1', 1, 2, 2, 'Desc 1'),
    new Action('42', '', 'Title 2', 3, 4, 1, 'Desc 2', '2016-12-31'),
];

export class FakeActionService {

    actions = TESTACTIONS.map(h => h.clone());
    lastPromise: Promise<any>;

    getActions(): Promise<Action[]> {
        return this.lastPromise = Promise.resolve<Action[]>(this.actions);
    }
}
