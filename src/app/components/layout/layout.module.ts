import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { UtilModule } from '../util/util.module';
import { ComunasRegionesService } from 'src/app/services/comunas-regiones.service';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    UtilModule
  ],
  providers: [
    ComunasRegionesService
  ],
})
export class LayoutModule { }
