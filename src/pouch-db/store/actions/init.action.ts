import { Action } from '@ngrx/store';


export const INIT = '[PouchDB] Init';
export const INIT_FAIL = '[PouchDB] Init';
export const INIT_SUCESS = '[PouchDB] Init';

export class Init implements Action {
    readonly type = INIT;
  }

  export class InitFail implements Action {
    readonly type = INIT_FAIL;
    constructor(public payload: any) {}
  }

  export class InitSuccess implements Action {
    readonly type = INIT_SUCESS;
    constructor(public payload: any) {}
  }

  export type InitActions =
  | Init
  | InitFail
  InitSuccess