import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let actions = [
      { id: 11, title: 'Take children to school', description: 'Before 08:35', position: 1 },
      { id: 12, title: 'Stand-up meeting', description: 'At 10:00', position: 2 },
      { id: 13, title: 'Prepare Continuous Delivery presentation', description: '#10 slides', position: 3 },
      { id: 14, title: 'Write Docker best practices', description: '', position: 4 },
      { id: 15, title: 'Read "Scaling Lean & Agile Development"', description: '', position: 5 },
      { id: 16, title: 'Learn "Introduction to TypeScript" course', description: '', position: 5 },
    ];
    return { actions };
  }
}
