import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  constructor(public router:Router, public authService:AuthService) {
    this.authService.auth.authState.subscribe((auth)=>{ 
      if(auth===null)
        this.router.navigate(['/']);
    });
  }

  ngOnInit() {
  }

}
