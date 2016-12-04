import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloatbuttonComponent } from './floatbutton.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[FloatbuttonComponent],
  declarations: [FloatbuttonComponent]
})
export class FloatbuttonModule { }