import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  {
    path: 'amitakale',
    component: TextComponent,
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmitaRoutingModule { }
