import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { StoreModule, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import {EffectsModule} from '@ngrx/effects';
// not used in production
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {StoreRouterConnectingModule, RouterStateSerializer}  from  '@ngrx/router-store';
import {reducers,customSerialer} from './store';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForumExploreModule } from '../../src/forum-explore/forum-explore.module';
import { AuthenticationModule } from '../../src/authentication/authentication.module';
import { PouchDbModule } from '../../src/pouch-db/pouch-db.module';





export const metaReducers: MetaReducer<any>[] =  [storeFreeze]
  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthenticationModule,
    ForumExploreModule,
    PouchDbModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
     StoreDevtoolsModule.instrument(),
     StoreRouterConnectingModule,
     AppRoutingModule,
    
    
    
  ],
  providers: [{provide : RouterStateSerializer, useClass: customSerialer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
