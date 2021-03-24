import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextComponent } from './amita/text/text.component';

const routes: Routes = [
  {
    path: 'amita',
    loadChildren: () => import('./amita/amita.module').then(m => m.AmitaModule),
    // component: TextComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
