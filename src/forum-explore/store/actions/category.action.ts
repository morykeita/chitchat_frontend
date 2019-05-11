import {Action} from '@ngrx/store'
import { Category } from 'src/forum-explore/models/category';


// load explore

export const LOAD_CATEGORY = '[Forum] Load category';
export const LOAD_CATEGORY_FAIL = '[Forum] Load category fail';
export const LOAD_CATEGORY_SUCCESS = '[Forum] Load category sucess';

export class LoadCategory  implements Action {
    readonly type = LOAD_CATEGORY;
}

export class LoadCategoryFail  implements Action {
    readonly type = LOAD_CATEGORY_FAIL;
    constructor(public payload : any){}
}

export class LoadCategorySucess  implements Action {
    readonly type = LOAD_CATEGORY_SUCCESS;
    constructor(public payload : Category[]){}
}

// action types

export type CategoryAction = LoadCategory | LoadCategoryFail  | LoadCategorySucess