import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';



@NgModule({
  declarations: [HorizontalMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HorizontalMenuComponent
  ]
})
export class SharedModule { }
