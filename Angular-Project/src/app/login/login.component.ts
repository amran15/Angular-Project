import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup; //variable: type;


  constructor() { }

  ngOnInit() { 
    this.loginForm = new FormGroup({
      username: new FormControl('', {validators: [Validators.required]}),
      password: new FormControl('', {validators: [Validators.required]}),
    });
  } 

  onSubmit(){
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    console.log('this was clicked', username, password);
  }

  clearButton(){
    this.loginForm.reset();
    console.log('the clear button was clicked')
  }



}
