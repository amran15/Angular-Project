import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class AuthService{

    login( username: string, password: string){
       console.log(username, password, 'this has been sent to backend via http request');
    }
}