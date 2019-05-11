import {Injectable} from '@angular/core';

import{Effect,Actions, ofType} from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import {of} from 'rxjs'

import * as roomActions from '../actions/room.action';
import * as fromServices from '../../services';


@Injectable()
export class RoomEffects {
    constructor( private action$ :Actions, private roomService : fromServices.RoomService){}

    @Effect()
    loadRooms$ = this.action$.pipe(
        ofType(roomActions.LOAD_ROOMS)
            ,switchMap(() =>{
                return this.roomService.getRooms().pipe(
                    map(rooms => new roomActions.LoadRoomsSuccess(rooms)),
                        catchError(error => of(new roomActions.LoadRoomsFail(error)))
                );
            })
    );
}