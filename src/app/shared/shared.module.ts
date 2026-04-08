import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    DatePipe
  ],
  providers: [DatePipe]
})
export class SharedModule { }
