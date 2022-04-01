import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import { RouterEvent, RouterLink, ROUTER_CONFIGURATION } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule
  ],
  declarations: [CadastroPage]
})
export class CadastroPageModule {}
function Onreturn() {
  throw new Error('Function not implemented.');
}

