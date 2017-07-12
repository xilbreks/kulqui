import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-chatt',
  templateUrl: './chatt.component.html',
  styleUrls: ['./chatt.component.css']
})
export class ChattComponent implements OnInit {
  user:any;
  constructor(private usersService:UsersService) {
    this.usersService.getUsers().subscribe((users)=>{
      //this.users = users;
    });
  }

  ngOnInit() {
  }

}
