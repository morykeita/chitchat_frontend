import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginRequest } from 'src/authentication/models/loginRequest';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  @Input() info = LoginRequest;

  @Output() submit = new EventEmitter<LoginRequest>();

  

  form: FormGroup;
  formBuilder: any;
  
  constructor(private fb: FormBuilder) { 
    this.createForm ();
    
  
}

 
  ngOnInit() {
    
  }


  createForm (){

    this.form = this.formBuilder.group({
      loginUsername: ['', Validators.required],
      loginPassword:['', Validators.required],

    });

  }

  onSubmit(form: FormGroup) {
    const { value, valid } = form;
    if (valid) {
      this.submit.emit(value);
    }
  }

}
