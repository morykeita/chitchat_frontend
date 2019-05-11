import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private info$ : any;
  private error$ : any;
  private success$ : boolean;

  constructor(private store : Store<fromStore.AuthState>,private formBuilder : FormBuilder) {
    this.createForm ();
   }

  ngOnInit() {
    this.info$ = this.store.select<any>(fromStore.getInfo);
    this.error$ = this.store.select<any>(fromStore.getError);
    //this.success$ = this.store.select<any>(fromStore.getIsSuccess);
    console.log("hhh")
  }

  registrationForm: FormGroup;
  createForm (){

    this.registrationForm = this.formBuilder.group({
      username: [''],
      password:[''],
      firstName:[''],
      lastName:[''],
      email:['']

    });

  }

  onRegistrationFormSubmit(): void {
    const payload = {
      email : this.registrationForm.get('email').value,
      password : this.registrationForm.get('password').value,
      firstName : this.registrationForm.get('firstName').value,
      lastName : this.registrationForm.get('lastName').value,
      username : this.registrationForm.get('username').value
    };
    console.log(payload)
    this.store.dispatch(new fromStore.SignUp(payload));
  }

}
