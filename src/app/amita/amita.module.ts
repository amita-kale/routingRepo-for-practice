import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmitaRoutingModule } from './amita-routing.module';
import { TextComponent } from './text/text.component';


@NgModule({
  declarations: [TextComponent],
  imports: [
    CommonModule,
    AmitaRoutingModule
  ]
})
export class AmitaModule { }
