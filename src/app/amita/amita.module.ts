import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmitaRoutingModule } from './amita-routing.module';
import { TextComponent } from './text/text.component';
import { HomeRoutingModule } from '../home/home-routing.module';
import { AboutusRoutingModule } from '../aboutus/aboutus-routing.module';
import { HelpRoutingModule } from '../help/help-routing.module';
import { ContactsRoutingModule } from '../contacts/contacts-routing.module';


@NgModule({
  declarations: [TextComponent],
  imports: [
    CommonModule,
    // AmitaRoutingModule,
    HomeRoutingModule,
    AboutusRoutingModule,
    HelpRoutingModule,
    ContactsRoutingModule,

  ]
})
export class AmitaModule { }
