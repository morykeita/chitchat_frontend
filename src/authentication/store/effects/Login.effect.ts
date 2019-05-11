import {Injectable} from '@angular/core';

import{Effect,Actions, ofType} from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import {of} from 'rxjs';

import * as LoginActions from '../actions/login.action';
import * as fromServices from '../../services';
import { LoginReponse } from 'src/authentication/models/LoginResponse';




@Injectable()
export class LoginEffects {
    constructor( private action$ :Actions, private fromServices : fromServices.AuthService){}

    @Effect()
    logIn$ = this.action$
      .pipe( ofType(LoginActions.LOGIN),
        map((action: LoginActions.LogIn) => action.payload),
        switchMap(payload =>{
  
          return this.fromServices.logIn(payload.email, payload.password)
            .pipe(map((response :LoginReponse) => {
              console.log(response)
              return new LoginActions.LogInSuccess(response)
            }), catchError(error =>{
              console.log(error)
              return of(new LoginActions.LogInFailure({error})); }));
        }));
  

    @Effect({ dispatch: false })
    LogInSuccess$ = this.action$.pipe(
      ofType(LoginActions.LOGIN_SUCCESS),
      tap((reponse) => {
        console.log('in LogInSuccess() effect')
        console.log(reponse)
       // localStorage.setItem('token', user.payload.access_token);
       // this.router.navigateByUrl('home');
      })
    );
  
  
    @Effect({ dispatch: false })
    LogInFailure$ = this.action$.pipe(
      ofType(LoginActions.LOGIN_FAILURE)
    );
  
  
//     @Effect()
//     SignUp : Observable<any> = this.actions
//       .pipe( ofType(AuthActionTypes.LOGIN),
//         map((action : LogIn) => action.payload),
//         switchMap(payload =>{
//           return this.authService.logIn(payload.email,payload.password)
//             .pipe(map((user) =>{
//               return new LogInSuccess({token:user.token , email : payload.email})
//             }), catchError(error =>{return of(new LogInFailure({error : error}))}));
//         }));
  
//     @Effect({ dispatch: false })
//     SignUpSuccess: Observable<any> = this.actions.pipe(
//       ofType(AuthActionTypes.SIGNUP_SUCCESS),
//       tap((user) => {
//         localStorage.setItem('token', user.payload.token);
//         this.router.navigateByUrl('/');
//       })
//     );
  
//     @Effect({ dispatch: false })
//     SignUpFailure: Observable<any> = this.actions.pipe(
//       ofType(AuthActionTypes.SIGNUP_FAILURE)
//     );
  
//     @Effect({ dispatch: false })
//     public LogOut: Observable<any> = this.actions.pipe(
//       ofType(AuthActionTypes.LOGOUT),
//       tap((user) => {
//         localStorage.removeItem('token');
//       })
//     );
  
//     /*  @Effect({ dispatch: false })
//       GetStatus: Observable<any> = this.actions
//         .pipe();
//         .ofType(AuthActionTypes.GET_STATUS)
//         .switchMap(payload => {
//           return this.authService.getStatus();
//         });*/
  
  
  
//   }
    }