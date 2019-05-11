import * as  fromPosts from '../actions/post.action'
import { state } from 'src/app/store';
import { Post } from '../../models/post';

export interface PostState {
    entities : { [id:number] : Post },
    loaded : boolean
    loading : boolean,
   
}

export const initialState : PostState = {
    entities  : {},
    loaded : false,
    loading : false
};


export function reducer (
    state = initialState,
    action : fromPosts.PostsActions
) : PostState {

    switch(action.type){
        case fromPosts.LOAD_POST: {
            return {
                ...state,
                loading : true,
            
            };
        }

        case  fromPosts.LOAD_POST_SUCCESS : {
                const rooms = action.payload;

                const  entities = rooms.reduce(
                    (entities : {[id:number] : Post}, room : Post) => {
                        return {
                            ...entities,
                            [room.id] : room
                        };
                    },
                    {
                        ...state.entities,
                    }
                )
                return {
                    ...state,
                    loaded : true,
                    loading:false,
                    entities
                };
        }

        case fromPosts.LOAD_POST_SUCCESS : {
                return {
                    ...state,
                    loaded : false,
                    loading : false,

                }
                
        }
    }
    return state
}

export const getRoomEntity = (state : PostState) => state.entities;
export const getRoomLoaded = (state : PostState) => state.loaded;
export const getRoomLoading = (state : PostState) => state.loading;
    
