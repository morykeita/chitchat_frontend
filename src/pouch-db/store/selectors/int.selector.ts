import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store'
import * as fromFeature from  '../reducers';
import * as fromInit from  '../reducers/init.reducer';




export const getInitiationState = createSelector(fromFeature.getPouchDbState,(state:fromFeature.PouchDbState) => 
    state.initiation
);

export const getPouchDb = createSelector(getInitiationState,fromInit.getIsInitiated);
export const getIsPouchDbInitiating = createSelector(getInitiationState,fromInit.getIsInitiating);
export const getHasPouchDbInitiationError = createSelector(getInitiationState,fromInit.getInitError);