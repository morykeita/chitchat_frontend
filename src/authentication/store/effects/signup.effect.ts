import {Injectable} from '@angular/core';

import{Effect,Actions, ofType} from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import {of} from 'rxjs';

import * as SignupActions from '../actions/signup.action';
import * as fromServices from '../../services';



@Injectable()
export class SignUpEffects {
    constructor( private action$ :Actions, private fromServices : fromServices.AuthService){}


    
    @Effect()
    signup$ = this.action$
      .pipe( ofType(SignupActions.SIGNUP),
        map((action: SignupActions.SignUp) => action.payload),
        switchMap(payload =>{
            console.log('hhghgg')
          return this.fromServices.signUp(payload)
            .pipe(map((response :any) => {
              console.log(response)
              return new SignupActions.SignUpSuccess(response)
            }), catchError(error =>{
              console.log(error)
              return of(new SignupActions.SignUpFail({error})); }));
        }));

   
    @Effect({ dispatch: false })
    SignUpSuccess$ = this.action$.pipe(
      ofType(SignupActions.SIGNUP_SUCCESS),
      tap((reponse) => {
        //localStorage.setItem('token', reponse.payload.token);
        //this.router.navigateByUrl('/');
      })
    );

    @Effect({ dispatch: false })
    LogInFailure$ = this.action$.pipe(
      ofType(SignupActions.SIGNUP_FAILURE)
    );
  

    }