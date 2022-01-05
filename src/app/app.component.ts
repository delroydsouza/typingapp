import { Component, ElementRef, ViewChild } from '@angular/core';
import {lorem} from 'faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('Ip') Ip!: ElementRef;

 randomText=lorem.sentence()
enteredText=''

onInput(val:any){
this.enteredText=val.target.value;
}
compare(randomLetter:string,enteredLetter:string){
if(!enteredLetter) {
return 'pending'
}
else if(randomLetter!=enteredLetter){
  navigator.vibrate(30)
  return 'incorrect'
}
else 
  return 'correct'


}

retry(){
  this.randomText=lorem.sentence()
  this.enteredText=''
  this.Ip.nativeElement.value = '';
}

}
