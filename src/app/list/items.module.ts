import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ItemListPage } from './item-list/item-list.page';
import { ItemDetailComponent } from './item-details/item-detail.component';
import { ItemsRoutingModule } from './items-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule,
    IonicModule
  ],
  declarations: [ItemListPage, ItemDetailComponent]
})
export class ItemsModule { }
