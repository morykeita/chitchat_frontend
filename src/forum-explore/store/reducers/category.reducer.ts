
import * as fromCategory from '../actions/category.action'
import { Category } from '../../models/category';



export interface CategoryState {
    entities : {[id:string] : Category}
    loaded : boolean,
    loading : boolean,
}

export const initialState : CategoryState = {
    entities:{},
    loaded : false,
    loading : false,
};

export function reducer(state = initialState, action : fromCategory.CategoryAction) : CategoryState
{
    switch(action.type){
        case  fromCategory.LOAD_CATEGORY : {
           return {
               ...state,
               loading : true
           };
        }

        case  fromCategory.LOAD_CATEGORY_FAIL : {
            
            return {
                ...state,
                loading : false,
                loaded : false
            }
         }

         case  fromCategory.LOAD_CATEGORY_SUCCESS : {
             const categories = action.payload;

             const  entities = categories.reduce(
                 (entities : {[id:string] : Category},category : Category) => {
                     return {
                         ...entities,
                         [category.id] : category
                     };
                 },
                 {
                     ...state.entities,
                 }
             )
            return {
                ...state,
                loading : false,
                loaded : true,
                entities,
                
            }
         }
    }
    return state;
}

export const getCategoriesEntities = (state : CategoryState) =>{return state.entities;}
export const getCategoriesLoading = (state : CategoryState) =>{return state.loading;}
export const getCategoriesLoaded = (state : CategoryState) =>{return state.loaded;}
export const getCategoriesState = (state : CategoryState) =>{return state}










