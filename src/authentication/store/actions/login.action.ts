import { Action } from '@ngrx/store';
import { LoginReponse } from '../../models/LoginResponse';




export const LOGIN = '[Auth] Login';
export const LOGIN_SUCCESS = '[Auth] Login Success';
export const LOGIN_FAILURE = '[Auth] Login Failure';
export const LOGOUT = '[Auth] Logout';
export const GET_STATUS = '[Auth] GetStatus'


export class LogIn implements Action {
  readonly type = LOGIN;
  constructor(public payload: any) {}
}

export class LogInSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: LoginReponse) {}
}

export class LogInFailure implements Action {
  readonly type = LOGIN_FAILURE;
  constructor(public payload: any) {}
}


export class LogOut implements Action {
  readonly type = LOGOUT;
}

export class GetStatus implements Action {
  readonly type = GET_STATUS;
}

export type LoginActions =
  | LogIn
  | LogInSuccess
  | LogInFailure
  | LogOut
  | GetStatus;
