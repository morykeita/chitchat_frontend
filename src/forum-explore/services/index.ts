import {RoomService} from './room.service';
import {CategoryService} from './category.service';

export const services : any[] = [RoomService,CategoryService];

export * from './category.service';
export * from './room.service';