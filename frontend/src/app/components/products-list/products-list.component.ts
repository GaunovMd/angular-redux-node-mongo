import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';

import { AppState } from '../../store/models/app-state.model';
import { ShoppingItem } from '../../store/models/shoppingItem.model';
import { AddItemAction, DeleteItemAction, LoadShoppingAction } from '../../store/actions/shopping.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  shoppingItems: Observable<Array<ShoppingItem>>;
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  newShoppingItem: ShoppingItem = { id: '', name: '' }

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.shoppingItems = this.store.select(store => store.shopping.list);
    this.loading$ = this.store.select(store => store.shopping.loading);
    this.error$ = this.store.select(store => store.shopping.error);

    this.store.dispatch(new LoadShoppingAction());
  }

  addItem() {
    if(this.newShoppingItem.name){
      this.newShoppingItem.id = uuid();

    this.store.dispatch(new AddItemAction(this.newShoppingItem));

    this.newShoppingItem = { id: '', name: '' };
    }
  }

  deleteItem(id: string) {
    this.store.dispatch(new DeleteItemAction(id));
  }

}
