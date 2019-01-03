import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListPage } from './list/item-list/item-list.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    component: ItemListPage,
    loadChildren: './list/items.module#ItemsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
