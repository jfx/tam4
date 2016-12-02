import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: []
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
