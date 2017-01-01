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
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let actions = [
      {
        $key: '11',
        title: '[DEV] Take children to school',
        todo: 1,
        done: 0,
        position: 6,
        description: 'Before 08:35',
        date: ''
      },
      {
        $key: '12',
        title: '[DEV] Stand-up meeting',
        todo: 1,
        done: 0,
        position: 5,
        description: 'At 10:00',
        date: ''
      },
      {
        $key: '13',
        title: '[DEV] Prepare Continuous Delivery presentation',
        todo: 4,
        done: 1,
        position: 4,
        description: '#10 slides',
        date: '2016-12-09'
      },
      {
        $key: '14',
        title: '[DEV] Write Docker best practices',
        todo: 5,
        done: 0,
        position: 3,
        description: '',
        date: '2016-12-16'
      },
      {
        $key: '15',
        title: '[DEV] Read "Scaling Lean & Agile Development"',
        todo: 10,
        done: 1,
        position: 2,
        description: '',
        date: '2016-12-31'
      },
      {
        $key: '16',
        title: '[DEV] Learn "Introduction to TypeScript" course with very very long title and some other things',
        todo: 6,
        done: 0,
        position: 1,
        description: '',
        date: '2016-12-31'
      },
    ];
    return { actions };
  }
}
