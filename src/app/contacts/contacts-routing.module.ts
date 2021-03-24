import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { Contacts1Component } from './contacts1/contacts1.component';
import { Contacts2Component } from './contacts2/contacts2.component';

const routes: Routes = [
  {
    path: 'contactus',
    component: ContactsComponent,
  },
  {
    path: 'contacts1',
    component: Contacts1Component,
  },
  {
    path: 'contacts2',
    component: Contacts2Component,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
