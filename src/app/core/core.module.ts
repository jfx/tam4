import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
// Necessary for in-memory-web-api
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/action/in-memory-data.service';

import { ActionService } from './service/action/action.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [ActionService]
})
export class CoreModule {

  // Only the root AppModule should import the CoreModule
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
