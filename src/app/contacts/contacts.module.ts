import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts/contacts.component';
import { Contacts1Component } from './contacts1/contacts1.component';
import { Contacts2Component } from './contacts2/contacts2.component';


@NgModule({
  declarations: [ContactsComponent, Contacts1Component, Contacts2Component],
  imports: [
    CommonModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
