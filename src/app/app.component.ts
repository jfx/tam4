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
import { Component, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'app/core/service/auth/auth.service';
import { environment } from 'app/../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isLoggedIn: boolean;
  private viewContainerRef: ViewContainerRef;
  footer = 'tam4.io v' + environment.version + ' - bbb - '
  + environment.envName + ' - &copy; ' + new Date().getFullYear();

  public constructor(public authService: AuthService, private router: Router, viewContainerRef: ViewContainerRef) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          this.router.navigate(['login']);
          this.isLoggedIn = false;
        } else {
          this.isLoggedIn = true;
          this.router.navigate(['/home']);
        }
      }
    );
    // You need this small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;
  }
}
