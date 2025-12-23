import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductDetailComponent } from './product-detail.component';

const routes = [
  {
    path: '',
    component: ProductDetailComponent,
  },
];

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ProductDetailComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductDetailModule {}


