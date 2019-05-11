import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromLogin from './login.reducer'
import * as fromSignup from './signup.reducer'

export interface AuthState {
    login : fromLogin.LoginState;
    signup : fromSignup.SignUpState;
}

export const reducers : ActionReducerMap<AuthState> =  {
    login : fromLogin.reducer,
    signup : fromSignup.reducer

}

export const getAuth = createFeatureSelector<AuthState>('auth');