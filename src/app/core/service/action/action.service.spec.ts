/* tslint:disable:no-unused-variable */
import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { Action } from 'app/personal/shared/action.model';
import { ActionMockService } from './action.mock.service';
import { TESTACTIONS } from '../test/fake-action.service';

describe('Service: Action', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                ActionMockService,
                { provide: XHRBackend, useClass: MockBackend }
            ]
        })
            .compileComponents();
    }));

    it('can instantiate service when inject service',
        inject([ActionMockService], (service: ActionMockService) => {
            expect(service instanceof ActionMockService).toBe(true);
        })
    );

    it('can instantiate service with "new"', inject([Http], (http: Http) => {
        expect(http).not.toBeNull('http should be provided');
        const service = new ActionMockService(http);
        expect(service instanceof ActionMockService).toBe(true, 'new service should be ok');
    }));

    it('can provide the mockBackend as XHRBackend',
        inject([XHRBackend], (backend: MockBackend) => {
            expect(backend).not.toBeNull('backend should be provided');
        })
    );

    describe('when getHeroes', () => {
        let backend: MockBackend;
        let service: ActionMockService;
        let fakeActions: Action[];
        let response: Response;

        beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
            backend = be;
            service = new ActionMockService(http);
            fakeActions = TESTACTIONS;
            const options = new ResponseOptions({ status: 200, body: { data: fakeActions } });
            response = new Response(options);
        }));

        it('should have expected fake heroes (then)', async(inject([], () => {
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

            service.getActions()
                .do(actions => {
                    expect(actions.length).toBe(fakeActions.length,
                        'should have expected number of actions');
                })
                .toPromise();
        })));

        it('should be OK returning no heroes', async(inject([], () => {
            const resp = new Response(new ResponseOptions({ status: 200, body: { data: [] } }));
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

            service.getActions()
                .do(actions => {
                    expect(actions.length).toBe(0, 'should have no heroes');
                })
                .toPromise();
        })));

        it('should treat 404 as an error', async(inject([], () => {
            const resp = new Response(new ResponseOptions({ status: 404 }));
            backend.connections.subscribe((c: MockConnection) => c.mockRespond(resp));

            service.getActions()
                .do(actions => {
                    fail('should not respond with action');
                })
                .catch(err => {
                    expect(err).toMatch(/Bad response status/, 'should catch bad response status code');
                    return Observable.of(null); // failure is the expected test result
                })
                .toPromise();
        })));
    });
});
