import {Action} from '@ngrx/store';
import { Room } from '../../models/room';

export const LOAD_ROOMS = '[Forum] Load Rooms';
export const LOAD_ROOMS_FAIL = '[Forum] Load Rooms FAIL';
export const LOAD_ROOMS_SUCCESS = '[Forum] Load Rooms Success';

export class LoadRooms implements Action {
    readonly type = LOAD_ROOMS;
}

export class LoadRoomsFail implements Action {
    readonly type = LOAD_ROOMS_FAIL;
    constructor(public payload : any){}
}

export class LoadRoomsSuccess implements Action {
    readonly type = LOAD_ROOMS_SUCCESS;
    constructor(public payload : Room[]){}
}

export type RoomsActions = LoadRooms | LoadRoomsFail|LoadRoomsSuccess