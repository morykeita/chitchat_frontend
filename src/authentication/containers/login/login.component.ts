import { Component, OnInit, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import {Store} from '@ngrx/store';
import * as fromStore from '../../store';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { LoginReponse } from 'src/authentication/models/LoginResponse';

import* as PouchDB  from 'pouchdb/dist/pouchdb';
import { LoginRequest } from 'src/authentication/models/loginRequest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  info: LoginRequest;
  
  currentUser$ : Observable<LoginReponse>;
  loginForm: FormGroup;


  private db : any;
  private isInstantiated : boolean;
  private listener : EventEmitter<any> = new EventEmitter;
  
  constructor(private store : Store<fromStore.AuthState> , private formBuilder : FormBuilder) { 
     this.createForm ();

    

    if (!this.isInstantiated){
      this.db = new PouchDB ('chitchat');
      this.isInstantiated = true;
    }

    
  }

  ngOnInit() {

    this.currentUser$ = this.store.select<any>(fromStore.getCurrentUser);
  
  }
  createForm (){

    this.loginForm = this.formBuilder.group({
      loginUsername: ['', Validators.required],
      loginPassword:['', Validators.required],

    });

  }

  onSubmit(): void {
 
    const payload = {
      email : this.loginForm.get('loginUsername').value,
      password : this.loginForm.get('loginPassword').value,
    };
  
    this.store.dispatch(new fromStore.LogIn(payload));
    
  }

}
