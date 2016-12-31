import * as firebase from 'firebase';

import { environment } from '../src/environments/environment.test';

console.log('Start to load ' + environment.envName + ' DB ...');

let actions = [
    {
        title: '[TEST] Stand-up meeting',
        todo: 1,
        done: 0,
        position: 5,
        description: 'At 10:00',
        date: ''
    },
    {
        title: '[TEST] Take children to school',
        todo: 1,
        done: 0,
        position: 6,
        description: 'Before 08:35',
        date: ''
    },
    {
        title: '[TEST] Prepare Continuous Delivery presentation',
        todo: 4,
        done: 1,
        position: 4,
        description: '#10 slides',
        date: '2016-12-09'
    },
    {
        title: '[TEST] Write Docker best practices',
        todo: 5,
        done: 0,
        position: 3,
        description: '',
        date: '2016-12-16'
    },
    {
        title: '[TEST] Read \"Scaling Lean & Agile Development\"',
        todo: 10,
        done: 1,
        position: 2,
        description: 'Description of action',
        date: '2016-12-31'
    },
    {
        title: '[TEST] Learn \"Introduction to TypeScript\" course with very very long title and some other things',
        todo: 6,
        done: 0,
        position: 1,
        description: '',
        date: '2016-12-31'
    },
];

let config = {
    apiKey: environment.apiKey,
    authDomain: environment.authDomain,
    databaseURL: environment.databaseURL,
    storageBucket: environment.storageBucket
};
let app = firebase.initializeApp(config);

firebase.database().ref('/backlog-sprint').remove().then(function () {
    console.log('Data successfully removed !');

    firebase.database().ref().set({ 'backlog-sprint': true });
    let refBacklogSprint = firebase.database().ref('/backlog-sprint');

    for (let i = 0; i < actions.length; i++) {
        refBacklogSprint.push(actions[i]).then(function () {
            console.log('Load DB ended successfully ! ');
            app.delete();
        }, function (error) {
            console.error('Error when inserting data : ' + error);
        });
    }
}, function (error) {
    console.error('Error when removing data : ' + error);
});
