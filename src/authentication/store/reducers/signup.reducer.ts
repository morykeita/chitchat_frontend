

import * as fromSignUp from '../actions/signup.action';
import { SignupRequest } from 'src/authentication/models/SignUp.request';


export interface SignUpState {
  // is a user authenticated?
  isSuccess: boolean;
  // if authenticated, there should be a user object
  newUser: SignupRequest | null;
  // error message
  errorMessage: string | null;
  successMessage : string | null;
}

export const initialState: SignUpState = {
isSuccess: false,
  newUser: null,
  errorMessage: '',
  successMessage: '',
};

export function reducer(state = initialState, action: fromSignUp.SignupActions): SignUpState {
 

  switch (action.type) {

    case fromSignUp.SIGNUP: {
        console.log('hnln');
      return {
        ...state,
        isSuccess: false,
        newUser: {
          username: action.payload.username,
          email: action.payload.email,
          password : action.payload.password
        },

        errorMessage: null
      };
    }
    case fromSignUp.SIGNUP_FAILURE: {
      return {
        ...state,
        isSuccess: false,
        errorMessage: action.payload.error.error.error
      };
    }
    case fromSignUp.SIGNUP_SUCCESS: {
      return {
        ...state,
        isSuccess: true,
        errorMessage: null,
        successMessage : null
      };
    }

    default: {
      return state;
    }
  }
}

export const getIsSuccess = (state : SignUpState) => {return state.isSuccess}
export const getSignupAccount = (state : SignUpState) => {return state.newUser}
export const getError = (state : SignUpState) => {return state.errorMessage}
export const getSusccessMessage = (state : SignUpState) => {return state.successMessage}

