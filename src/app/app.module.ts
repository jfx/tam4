import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { PersonalModule } from './personal/personal.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PersonalModule
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
