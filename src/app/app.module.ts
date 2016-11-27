import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './core/datepicker/datepicker.component';
import { HomeComponent } from './core/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';

import { PersonalModule } from './personal/personal.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    PersonalModule,
  ],
  declarations: [
    AppComponent,
    //    DatepickerComponent,
    HomeComponent,
    NavbarComponent,
  ],
  exports: [
    //    DatepickerComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
