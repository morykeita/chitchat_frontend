import * as fromRouter from '@ngrx/router-store';
import { Params ,ActivatedRouteSnapshot,RouterStateSnapshot, RouterState} from '@angular/router';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { Serializable } from 'selenium-webdriver';

export interface RouterStateUrl {
    url : string;
    queryParams : Params;
    params : Params
}

export interface state {
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>
}

export const reducers : ActionReducerMap<state> = {
    routerReducer: fromRouter.routerReducer
}

export const getRouterState = createFeatureSelector<fromRouter.RouterReducerState<RouterStateUrl>>('routerReducer');

export class customSerialer  implements fromRouter.RouterStateSerializer<RouterStateUrl>{

    serialize(routerState : RouterStateSnapshot) : RouterStateUrl{
        const {url} = routerState;
        const {queryParams} = routerState.root;
        
        let state : ActivatedRouteSnapshot = routerState.root;
        while(state.firstChild){
            state = state.firstChild;
        }

        const {params} = state;

        return {url,queryParams,params};
    }

}