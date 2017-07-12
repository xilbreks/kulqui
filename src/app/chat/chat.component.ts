import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  users:any;
  constructor(public router:Router, public authService:AuthService,private usersService:UsersService) {
    this.authService.auth.authState.subscribe((auth)=>{ 
      if(auth===null)
        this.router.navigate(['/']);
    });
    this.usersService.getUsers().subscribe((users)=>{
      this.users = users;
    });
  }

  ngOnInit() {
  }

}
