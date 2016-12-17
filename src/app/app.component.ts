import { Component, ViewContainerRef } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { environment } from 'app/../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private viewContainerRef: ViewContainerRef;
  footer = 'tam4.io v x.y.z - bbb - ' + environment.envName +' - &copy; 2016';

  public constructor(viewContainerRef: ViewContainerRef) {
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}
