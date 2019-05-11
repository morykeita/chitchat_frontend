import * as  fromRooms from '../actions/room.action'
import { Room } from '../../models/room';
import { state } from 'src/app/store';

export interface RoomState {
    entities : { [id:number] : Room },
    loaded : boolean
    loading : boolean,
   
}

export const initialState : RoomState = {
    entities  : {},
    loaded : false,
    loading : false
};


export function reducer (
    state = initialState,
    action : fromRooms.RoomsActions
) : RoomState {

    switch(action.type){
        case fromRooms.LOAD_ROOMS: {
            return {
                ...state,
                loading : true,
            
            };
        }

        case  fromRooms.LOAD_ROOMS_SUCCESS : {
                const rooms = action.payload;

                const  entities = rooms.reduce(
                    (entities : {[id:number] : Room}, room : Room) => {
                        return {
                            ...entities,
                            [room.id] : room
                        };
                    },
                    {
                        ...state.entities,
                    }
                )
                return {
                    ...state,
                    loaded : true,
                    loading:false,
                    entities
                };
        }

        case fromRooms.LOAD_ROOMS_FAIL : {
                return {
                    ...state,
                    loaded : false,
                    loading : false,

                }
                
        }
    }
    return state
}

export const getRoomEntity = (state : RoomState) => state.entities;
export const getRoomLoaded = (state : RoomState) => state.loaded;
export const getRoomLoading = (state : RoomState) => state.loading;
    
