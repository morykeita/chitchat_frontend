
import { Component, OnInit } from '@angular/core';

import {Store} from '@ngrx/store';
// import {Observable} from 'rxjs/Observable';
import * as fromStore from '../../store';

//import PouchDB from 'pouchdb';


import { Category } from 'src/forum-explore/models/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'forum-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$ : Observable<Category[]>;

  constructor( private store :Store<fromStore.ForumState>) { }

  ngOnInit() {
   this.categories$ = this.store.select<any>(fromStore.getAllCategories);
    this.store.dispatch(new fromStore.LoadCategory());

    
  }

  // use async pipe to render elements






  
}
