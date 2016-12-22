import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let actions = [
      {
        $key: '11',
        title: '[DEV] Take children to school',
        todo: 1,
        done: 0,
        description: 'Before 08:35',
        date: ''
      },
      {
        $key: '12',
        title: '[DEV] Stand-up meeting',
        todo: 1,
        done: 0,
        description: 'At 10:00',
        date: ''
      },
      {
        $key: '13',
        title: '[DEV] Prepare Continuous Delivery presentation',
        todo: 4,
        done: 1,
        description: '#10 slides',
        date: '2016-12-09'
      },
      {
        $key: '14',
        title: '[DEV] Write Docker best practices',
        todo: 5,
        done: 0,
        description: '',
        date: '2016-12-16'
      },
      {
        $key: '15',
        title: '[DEV] Read "Scaling Lean & Agile Development"',
        todo: 10,
        done: 1,
        description: '',
        date: '2016-12-31'
      },
      {
        $key: '16',
        title: '[DEV] Learn "Introduction to TypeScript" course with very very long title and some other things',
        todo: 6,
        done: 0,
        description: '',
        date: '2016-12-31'
      },
    ];
    return { actions };
  }
}
