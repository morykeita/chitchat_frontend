import { Action } from '@ngrx/store';
import { Post } from '../../models/post';

export const LOAD_POST = '["Forum"] Load Post';
export const LOAD_POST_FAIL = '["Forum"] Load Post Fail';
export const LOAD_POST_SUCCESS = '["Forum"] Load Post Success';

export class LoadPost implements Action {
    readonly type = LOAD_POST;
}

export class LoadPostFail implements Action {
    readonly type = LOAD_POST_FAIL;
    constructor( public payload : any){}

}

export class LoadPostSuccess implements Action {
    readonly type = LOAD_POST_SUCCESS;
    constructor( public payload : Post[]){}
}

export type PostsActions = LoadPost | LoadPostFail | LoadPostSuccess;