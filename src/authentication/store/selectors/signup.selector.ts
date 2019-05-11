import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store'
import * as fromFeature from  '../reducers';
import * as fromSignup from  '../reducers/signup.reducer';




export const getSignupState = createSelector(fromFeature.getAuth,(state:fromFeature.AuthState) => 
    state.signup
);

export const getInfo = createSelector(getSignupState,fromSignup.getSignupAccount);
export const getIsSuccess = createSelector(getSignupState,fromSignup.getIsSuccess);
export const getError = createSelector(getSignupState,fromSignup.getError);
export const getSusccessMessage = createSelector(getSignupState,fromSignup.getSusccessMessage);