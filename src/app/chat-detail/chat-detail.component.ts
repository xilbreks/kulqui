import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
  userId:string;
  user:any;
  userMessages:any;
  constructor(private activatedRoute:ActivatedRoute,private usersService:UsersService) {
    this.activatedRoute.params.subscribe((params:any)=>{
      this.userId = params.id;
      this.user = null;
      this.usersService.getUser(this.userId).subscribe((user)=>{
        this.user = user;
      });
      this.usersService.getMessages(this.userId).subscribe((messages)=>{
        this.userMessages = messages;
      });
    });
  }

  enviar(texto): boolean{
    let tmp_txt:string = texto.value;
    tmp_txt = tmp_txt.trim();
    if(tmp_txt.length>0){
      this.usersService.pushMessage(this.userId,tmp_txt,false);
      texto.value="";
    }
    return false;
  }

  ngOnInit() {
  }

}
