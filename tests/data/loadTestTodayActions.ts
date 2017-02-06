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

const todayActions = [
    {
        title: '[TEST] Stand-up meeting',
        todo: 1,
        done: 0,
        position: 4,
        description: 'At 10:00',
        date: ''
    },
    {
        title: '[TEST] Call mechanic',
        todo: 1,
        done: 0,
        position: 3,
        description: '',
        date: ''
    },
    {
        title: '[TEST] Prepare Continuous Delivery presentation',
        todo: 4,
        done: 1,
        position: 2,
        description: '#10 slides',
        date: '2017-01-31'
    },
    {
        title: '[TEST] Read \"Scaling Lean & Agile Development\"',
        todo: 10,
        done: 1,
        position: 1,
        description: 'Description of action',
        date: '2017-02-15'
    },
];

const config = {
    apiKey: environment.apiKey,
    authDomain: environment.authDomain,
    databaseURL: environment.databaseURL,
    storageBucket: environment.storageBucket
};
const app = firebase.initializeApp(config);
const rootRef = firebase.database().ref();

const promiseRMToday = firebase.database().ref('/backlog-today').remove();
promiseRMToday
    .then(_ => console.log('Today backlog actions successfully removed !'))
    .catch(error => console.log(error, 'Error when removing Today backlog actions : ' + error));

const refTodayBacklog = firebase.database().ref('/backlog-today');

for (let i = 0; i < todayActions.length; i++) {
    const promisePSHToday = refTodayBacklog.push(todayActions[i]);
    promisePSHToday
        .then(_ => {
            process.stdout.write('.');
            if (i === (todayActions.length - 1)) {
                app.delete();
                console.log('\nToday actions successfully added !');
            }
        })
        .catch(error => console.log(error, 'Error when inserting Today backlog actions : ' + error));
}
