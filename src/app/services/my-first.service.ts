import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages: Array<any> = [];


  constructor() {
    this.init();
   }

  init():void{
    this.insert({
        name:"Jose",
        email:"jose@gmail.com",
        message:"ola"
      });
    this.insert({
        name:"Joao",
        email:"joao@gmail.com",
        message:"ola joao"
      });
    this.insert({
        name:"Josefino",
        email:"josefino@gmail.com",
        message:"ola josefino"
      });
  }

  insert(message: {name:string, email:string, message:String}) : void {
    this.messages.push(message);
  }

  getAllMessages(){
    return this.messages;
  }

  deleteMessage(index:number){
    this.messages.splice(index,1);
  }
}
