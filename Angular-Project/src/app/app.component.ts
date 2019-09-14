import { Component } from '@angular/core';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Project';
  num = 0; //variable: type;

 nameNamer (){ 
   let name: any = 'Ahmed'; //any allows the variable name to be dynamic
   name = 6;
 }

 onInc() {
   console.log('this Inc button was clicked on!');
   this.num++;
 }
  
}
