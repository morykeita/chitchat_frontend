import { ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import * as fromInit  from './init.reducer';



export interface PouchDbState {
    initiation: fromInit.InitState;
}

export const reducers : ActionReducerMap<PouchDbState> = {
    initiation : fromInit.reducer
    
}

export const getPouchDbState = createFeatureSelector<PouchDbState>('pouchDb');


