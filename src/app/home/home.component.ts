import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  imagenFondo:number=1;

  constructor() { }

  ngOnInit() {
    setInterval(()=>{
      if(this.imagenFondo<2)
        this.imagenFondo++;
      else
        this.imagenFondo = 1;
    },50000);
  }

}
