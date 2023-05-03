import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionsComponent } from './layouts/sections/sections.component';

const routes: Routes = [{
  path: '',
  component: SectionsComponent, data: { title: 'Sections' }, children: [
    {
      path: '',
      loadChildren: () => import('./sections/sections.module').then(m => m.SectionsModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
