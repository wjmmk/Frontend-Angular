import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'product',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductFormComponent
  },
  {
    path: 'product/edit/:id',
    component: ProductFormComponent
  },
  {
    path: 'user',
    component: UserListComponent
  },
  {
    path: 'user/create',
    component: UserFormComponent
  },
  {
    path: 'user/edit/:id',
    component: UserFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
