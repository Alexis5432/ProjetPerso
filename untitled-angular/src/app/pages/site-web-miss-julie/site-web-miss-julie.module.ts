import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../../components/components.module';

import { SiteWebMissJulie } from './site-web-miss-julie.component'
import { FormsModule } from '@angular/forms';

const routes = [
  {
    path: '',
    component: SiteWebMissJulie,
  },
]

@NgModule({
  declarations: [SiteWebMissJulie],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes), FormsModule],
  exports: [SiteWebMissJulie],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SiteWebMissJulieModule {}
