import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemListPage } from './item-list/item-list.page';
import { ItemDetailComponent } from './item-details/item-detail.component';

const itemsRoutes: Routes = [
    { path: 'list', redirectTo: '/superitems' },
    { path: 'items', redirectTo: '/superitems' },
    { path: 'item/:id', redirectTo: '/superitem/:id' },
    { path: 'superitems', component: ItemListPage, data: { animation: 'items' } },
    { path: 'superitem/:id', component: ItemDetailComponent, data: { animation: 'item' } }
];

@NgModule({
    imports: [
        RouterModule.forChild(itemsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ItemsRoutingModule { }
