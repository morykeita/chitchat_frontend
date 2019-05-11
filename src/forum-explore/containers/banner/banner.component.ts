import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'forum-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  searchboxForm: FormGroup;

  constructor(private formBuilder : FormBuilder) { 
    this.createForm ();
  }

  ngOnInit() {
  }


  createForm (){

    this.searchboxForm = this.formBuilder.group({
      // loginUsername: ['', Validators.required],
      // loginPassword:['', Validators.required],

    });

  }

}
