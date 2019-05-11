
import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import {Store} from '@ngrx/store';

import * as fromStore from '../../store';


import { Category } from 'src/forum-explore/models/category';


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {
  category$ : Observable<Category>;
  constructor(
    private store : Store<fromStore.ForumState>
  ) { }

  ngOnInit() {
    this.category$ = this.store.select(fromStore.getSelectedCategory);
    this.store.dispatch(new fromStore.LoadRooms())
  }

  onSelect(event:number[]){

  }

  @Input() category: any;


}
