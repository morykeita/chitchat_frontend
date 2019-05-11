import {Injectable} from '@angular/core';

import{Effect,Actions, ofType} from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import {of} from 'rxjs';
import * as inititianctions from '../actions/init.action';
import * as fromServices from '../../services';



@Injectable()
export class InititationEffects {
    constructor( private action$ :Actions, private pouchDbService : fromServices.PouchdbService){}

    // @Effect()
    // getDb$ = this.action$.pipe(
    //     ofType(inititianctions.INIT),
    //         switchMap(() =>{
    //             console.log("hello")
    //             return this.pouchDbService.init()
    //         }, map(response => new inititianctions.InitSuccess(response),
    //         catchError(error => of(new inititianctions.InitFail(error)))
    //         )
    //         )
    // )
  

    // @Effect({ dispatch: false })
    // LogInSuccess$ = this.action$.pipe(
    //   ofType(LoginActions.LOGIN_SUCCESS),
    //   tap((user) => {
    //     console.log('in LogInSuccess() effect')
    //     console.log(user)
    //    // localStorage.setItem('token', user.payload.access_token);
    //    // this.router.navigateByUrl('home');
    //   })
    // );
  
  
    // @Effect({ dispatch: false })
    // LogInFailure$ = this.action$.pipe(
    //   ofType(InitActions.INIT_FAIL
    // );
    // )
  
    }