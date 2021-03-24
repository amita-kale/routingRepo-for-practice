import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'amita',
  //   loadChildren: () => import('./amita/amita.module').then(m => m.AmitaModule),
  //   // component: TextComponent,
  // },

  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },

  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule),
  },
  {
    path: '',
    loadChildren: () => import('./help/help.module').then(m => m.HelpModule),
  },
  {
    path: '',
    loadChildren: () => import('./contacts/contacts.module').then(m => m.ContactsModule),
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
