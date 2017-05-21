/* tslint:disable:no-unused-variable */

import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { TestBed, async, inject } from '@angular/core/testing';
import { ActionMockService } from './action.mock.service';
import { AlertService } from '../alert/alert.service';

describe('Service: ActionMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [ActionMockService, AlertService]
    });
  });

  it('should work', inject([Http, ActionMockService], (service: ActionMockService) => {
    expect(service).toBeTruthy();
  }));

  it('can instantiate service when inject service',
    inject([ActionMockService], (service: ActionMockService) => {
      expect(service instanceof ActionMockService).toBe(true);
    })
  );

  it('can instantiate service with "new"', inject([Http, AlertService], (http: Http, alertService: AlertService) => {
    expect(http).not.toBeNull('http should be provided');
    const service = new ActionMockService(http, alertService);
    expect(service instanceof ActionMockService).toBe(true, 'new service should be ok');
  }));

  it('can instantiate service when inject service',
    inject([ActionMockService], (service: ActionMockService) => {
      expect(service instanceof ActionMockService).toBe(true);
    })
  );

  it('should have expected actions', inject([Http], (http: Http, alertService: AlertService) => {
    expect(http).not.toBeNull('http should be provided');
    const service = new ActionMockService(http, alertService);

    service.getSprintActions()
      .do(actions => {
        expect(actions.length).toBe(5,
          'should have expected number of actions');
      })
      .toPromise();
  }));
});
