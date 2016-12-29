import { Component, ViewContainerRef } from '@angular/core';

import { environment } from 'app/../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private viewContainerRef: ViewContainerRef;
  footer = 'tam4.io v' + environment.version + ' - bbb - '
  + environment.envName + ' - &copy; ' + new Date().getFullYear();

  public constructor(viewContainerRef: ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}
