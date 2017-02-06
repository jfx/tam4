/**
 * Copyright (c) 2017 Francois-Xavier Soubirou.
 *
 * This file is part of tam4.
 *
 * tam4 is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * tam4 is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with tam4. If not, see <http://www.gnu.org/licenses/>.
 */
import * as firebase from 'firebase';

import { environment } from '../../src/environments/environment.test';

console.log('Start to load DB - Env : ' + environment.envName);

const sprintActions = [
    {
        title: '[TEST] Take children to school',
        todo: 1,
        done: 0,
        position: 5,
        description: 'Before 08:35',
        date: ''
    },
    {
        title: '[TEST] Call the bank',
        todo: 1,
        done: 0,
        position: 4,
        description: '',
        date: ''
    },
    {
        title: '[TEST] Write Docker best practices',
        todo: 5,
        done: 1,
        position: 3,
        description: '',
        date: '2017-01-31'
    },
    {
        title: '[TEST] Prepare alpha project budget',
        todo: 3,
        done: 1,
        position: 2,
        description: '',
        date: '2017-01-31'
    },
    {
        title: '[TEST] Learn \"Introduction to TypeScript\" course with very very long title and some other things',
        todo: 6,
        done: 0,
        position: 1,
        description: '',
        date: '2017-02-28'
    },
];

const config = {
    apiKey: environment.apiKey,
    authDomain: environment.authDomain,
    databaseURL: environment.databaseURL,
    storageBucket: environment.storageBucket
};
const app = firebase.initializeApp(config);

const promiseRMSprint = firebase.database().ref('/backlog-sprint').remove();
promiseRMSprint
    .then(_ => console.log('Sprint backlog actions successfully removed !'))
    .catch(error => console.log(error, 'Error when removing Sprint backlog actions : ' + error));

// firebase.database().ref().set({ 'backlog-sprint': true });

const refSprintBacklog = firebase.database().ref('/backlog-sprint');

for (let i = 0; i < sprintActions.length; i++) {
    const promisePSHSprint = refSprintBacklog.push(sprintActions[i]);
    promisePSHSprint
        .then(_ => {
            process.stdout.write('.');
            if (i === (sprintActions.length - 1)) {
                app.delete();
                console.log('\nSprint actions successfully added !');
            }
        })
        .catch(error => console.log(error, 'Error when inserting Sprint backlog actions : ' + error));
}
