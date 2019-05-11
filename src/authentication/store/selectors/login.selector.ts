import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../app/store'
import * as fromFeature from  '../reducers';
import * as fromLogin from  '../reducers/login.reducer';




export const getLoginState = createSelector(fromFeature.getAuth,(state:fromFeature.AuthState) => 
    state.login
);

export const getCurrentUser = createSelector(getLoginState,fromLogin.getLoginUser);
export const getIsUserAuthenticated = createSelector(getLoginState,fromLogin.getLoginIsAuthenticated);
export const getLoginError = createSelector(getLoginState,fromLogin.getLoginError);