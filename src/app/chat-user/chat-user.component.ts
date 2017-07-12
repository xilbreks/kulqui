import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent implements OnInit {
  userId:string;
  user:any;
  userMessages:any;
  constructor(private usersService:UsersService, private authService:AuthService) {
    this.authService.auth.authState.subscribe((user)=>{
      if(user){
        this.userId = user.uid;
        this.usersService.getUser(this.userId).subscribe((user)=>{
          this.user = user;
        });
        this.usersService.getMessages(this.userId).subscribe((messages)=>{
          this.userMessages = messages;
        });
      }else{
        this.userId = null;
        this.user = null;
        this.userMessages = null;
      }
    });
  }

  enviar(texto): boolean{
    let tmp_txt:string = texto.value;
    tmp_txt = tmp_txt.trim();
    if(tmp_txt.length>0){
      this.usersService.pushMessage(this.userId,tmp_txt,true);
      texto.value="";
    }
    return false;
  }

  ngOnInit() {
  }

}
