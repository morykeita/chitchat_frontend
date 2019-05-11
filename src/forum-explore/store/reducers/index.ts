import { ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as fromCategories  from './category.reducer';
import * as fromRooms  from './room.reducer';
import * as fromPost from './post.reducer'


export interface ForumState {
    categories: fromCategories.CategoryState;
    rooms : fromRooms.RoomState;
    post:fromPost.PostState
}

export const reducers : ActionReducerMap<ForumState> = {
    categories : fromCategories.reducer,
    rooms : fromRooms.reducer,
    post : fromPost.reducer
}

export const getForumState = createFeatureSelector<ForumState>('forum');


