import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { environment } from 'app/../environments/environment';

import { AlertService } from '../service/alert/alert.service';

import { Alert } from '../shared/alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  private alerts: Alert[];
  private timeout: number;

  constructor(private alertService: AlertService) {
    this.timeout = environment.alertTimeout;
  }

  ngOnInit(): void {
    this.alerts = this.alertService.getAlerts();
  }
}
