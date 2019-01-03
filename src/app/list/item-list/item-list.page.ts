import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: 'item-list.page.html',
  styleUrls: ['item-list.page.scss']
})
export class ItemListPage implements OnInit {
  items$: Observable<Item[]>;
  selectedId: any;

  constructor(
    private service: ItemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.items$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        // this.selectedId = +params.get('id');
        return this.service.getItems();
      })
    );
  }
}
