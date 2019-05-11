import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import {effects,reducers} from './store';
import { LoginComponent } from './containers/login/login.component';
import { SignupComponent } from './containers/signup/signup.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { AuthRoutingModule } from './auth.routing';

@NgModule({
  declarations: [LoginComponent, SignupComponent, LoginFormComponent, SignupFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth',reducers),
    EffectsModule.forFeature(effects)
  ]
})
export class AuthenticationModule { }
