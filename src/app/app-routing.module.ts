import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'layout',
    loadChildren: () => import('src/app/components/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: '**',
    redirectTo: 'layout/index'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
