import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { MemoryComponent } from './memory/memory.component';
import { MyCharacterComponent } from './my-character/my-character.component';
import { MyTestComponent } from './my-test/my-test.component';

const routes: Routes = [
  {
    path: 'chat',
    component: ChatComponent
  },
  {
    path: 'memory',
    component: MemoryComponent
  }
  ,
  {
    path: 'me',
    component: MyCharacterComponent
  },
  {
    path: 'test',
    component: MyTestComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'memory',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
