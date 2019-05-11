import { User } from '../../models/user';

import * as fromLogin from '../actions/login.action';


export interface LoginState {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  currentUser: User | null;
  // error message
  errorMessage: string | null;
}

export const initialState: LoginState = {
  isAuthenticated: false,
  currentUser: null,
  errorMessage: ''
};

export function reducer(state = initialState, action: fromLogin.LoginActions): LoginState {
 

  switch (action.type) {

    case fromLogin.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        currentUser: {
          token: action.payload.access_token,
          email: action.payload.email
        },

        errorMessage: null
      };
    }
    case fromLogin.LOGIN_FAILURE: {
      return {
        ...state,
        //errorMessage: 'Incorrect email and/or password.'
        errorMessage: action.payload.error.error.error_description
      };
    }
  
    case fromLogin.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}

export const getLoginIsAuthenticated = (state : LoginState) => {return state.isAuthenticated}
export const getLoginUser = (state : LoginState) => {return state.currentUser}
export const getLoginError = (state : LoginState) => {return state.errorMessage}

