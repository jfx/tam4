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
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CoreModule } from './core/core.module';
import { MockModule } from './core/mock.module';
import { HomeModule } from './home/home.module';
import { PersonalModule } from './personal/personal.module';
import { SharedModule } from './shared/shared.module';

import { environment } from 'app/../environments/environment';
import { LoginComponent } from './login/login.component';

const importedModules: Array<any> = [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    PersonalModule,
    SharedModule,
];

if (environment.mock) {
   console.log('Enabling mocked services.');
   importedModules.push(MockModule);
}

@NgModule({
  imports: importedModules,
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
