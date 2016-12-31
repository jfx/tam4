import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DndModule} from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DndModule.forRoot(),
  ],
  declarations: [
  ],
  exports: [
    CommonModule,
    FormsModule,
    DndModule,
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
