/* tslint:disable:no-unused-variable */

import { Observable } from 'rxjs/Observable';

import { Action } from '../action.model';
import { ActionService } from '../action.service';

export var TESTACTIONS: Action[] = [
    new Action(41, 'Title 1', 1, 2, 'Desc 1'),
    new Action(42, 'Title 2', 3, 4, 'Desc 2', '31/12/2016'),
];

export class FakeActionService {

    actions = TESTACTIONS.map(h => h.clone());
    lastPromise: Promise<any>;

    getActions(): Promise<Action[]> {
        return this.lastPromise = Promise.resolve<Action[]>(this.actions);
    }
}
