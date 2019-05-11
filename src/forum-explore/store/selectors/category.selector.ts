import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store'
import * as fromFeature from  '../reducers';
import * as fromCategories from  '../reducers/category.reducer';
import { Category } from '../../models/category';



export const getCategoryState = createSelector(fromFeature.getForumState,(state:fromFeature.ForumState) => 
    state.categories
);





// states
export const getCategoriesEntities = createSelector(getCategoryState,fromCategories.getCategoriesEntities);


export const getSelectedCategory = createSelector(
    getCategoriesEntities,
    
    fromRoot.getRouterState,
    (entities,router) : Category =>{
        console.log(entities);
        const temp = entities[router.state.params.categoryId];
        const val = router.state && entities[router.state.params.categoryId];
        return router.state && entities[router.state.params.categoryId]
       
    }
);


export const getAllCategories = createSelector(getCategoriesEntities,(entities) =>{
    return Object.keys(entities).map(id => entities[id]);
})

export const getAllCategoriesLoaded = createSelector(getCategoryState,fromCategories.getCategoriesLoaded);
export const getAllCategoriesLoading = createSelector(getCategoryState,fromCategories.getCategoriesLoading);