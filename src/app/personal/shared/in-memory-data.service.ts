import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let actions = [
      {
        id: 11,
        title: 'Take children to school',
        todo: 1,
        done: 0,
        description: 'Before 08:35',
        date: ''
      },
      {
        id: 12,
        title: 'Stand-up meeting',
        todo: 1,
        done: 0,
        description: 'At 10:00',
        date: ''
      },
      {
        id: 13,
        title: 'Prepare Continuous Delivery presentation',
        todo: 4,
        done: 1,
        description: '#10 slides',
        date: '09/12/2016'
      },
      {
        id: 14,
        title: 'Write Docker best practices',
        todo: 5,
        done: 0,
        description: '',
        date: '16/12/2016'
      },
      {
        id: 15,
        title: 'Read "Scaling Lean & Agile Development"',
        todo: 10,
        done: 1,
        description: '',
        date: '31/12/2016'
      },
      {
        id: 16,
        title: 'Learn "Introduction to TypeScript" course with very very long title and some other things',
        todo: 6,
        done: 0,
        description: '',
        date: '31/12/2016'
      },
    ];
    return { actions };
  }
}
