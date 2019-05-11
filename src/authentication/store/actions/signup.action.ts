import { Action } from '@ngrx/store';

export const SIGNUP = '[Auth] Signup';
export const SIGNUP_SUCCESS = '[Auth] Signup Success';
export const SIGNUP_FAILURE = '[Auth] Signup Failure';


export class SignUp implements Action {
    readonly type = SIGNUP;
    constructor(public payload: any) {}
  }
  
  export class SignUpSuccess implements Action {
    readonly type =SIGNUP_SUCCESS;
    constructor(public payload: any) {}
  }
  
  export class SignUpFail implements Action {  
    readonly type = SIGNUP_FAILURE;
    constructor(public payload: any) {}
  }

  export type SignupActions = | SignUp
  | SignUpSuccess
  | SignUpFail