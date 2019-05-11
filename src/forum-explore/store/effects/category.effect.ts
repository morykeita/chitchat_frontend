import {Injectable} from '@angular/core';

import{Effect,Actions, ofType} from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import {of} from 'rxjs'

import * as categoryActions from '../actions/category.action';
import * as fromServices from '../../services';


@Injectable()
export class CategoryEffects {
    constructor( private action$ :Actions, private categoryService : fromServices.CategoryService){}

    @Effect()
    loadCategory$ = this.action$.pipe(
        ofType(categoryActions.LOAD_CATEGORY)
            ,switchMap(() =>{
                return this.categoryService.getCategories().pipe(
                    map(categories => new categoryActions.LoadCategorySucess(categories)),
                        catchError(error => of(new categoryActions.LoadCategoryFail(error)))
                );
            })
    );
}