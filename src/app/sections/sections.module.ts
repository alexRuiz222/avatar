import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SectionsRoutingModule } from './sections-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './chat/chat.component';
import { MemoryComponent } from './memory/memory.component';
import { MaterialModule } from '../shared/modules/material/material.module';
import { MyCharacterComponent } from './my-character/my-character.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyTestComponent } from './my-test/my-test.component';


@NgModule({
  declarations: [
    ChatComponent,
    MemoryComponent,
    MyCharacterComponent,
    MyTestComponent
  ],
  imports: [
    CommonModule,
    SectionsRoutingModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SectionsModule { }
