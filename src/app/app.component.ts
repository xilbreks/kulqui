import { Component, OnInit } from '@angular/core';

import { Menu } from './menu';
import { Submenu } from './submenu';
import { AuthService } from './auth.service';
import { MyBagService } from './my-bag.service';

import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  menus:Menu[];
  currentMenu:Menu;
  isAdmin:boolean=false;
  isLogged:boolean=false;
  items:number=0;

  constructor(
    private authService:AuthService,
    private router:Router, 
    private myBagService:MyBagService
  ) {
    this.authService.isAdmin().subscribe((admin)=>{
      this.isAdmin = admin;
      console.log("¿Es Admin?:",admin);
    });
    this.authService.isLogged().subscribe((logged)=>{
      this.isLogged = logged;
      console.log("¿Esta Logeado?:",logged);
      if(!logged)
        this.currentMenu = this.menus[0];
    });
    this.myBagService.cantidad.subscribe((cant)=>{
      this.items = cant;
    });
  }

  openSidebar(){
    $('.ui.labeled.icon.sidebar').sidebar('toggle');
  }

  changeRoute(path1, path2, menu) {
    console.log('cambiando ruta',path1,path2);
    this.currentMenu=menu;
    this.router.navigate([path1,path2]);
  }

  ngOnInit(){
    this.menus = [
        new Menu('Tienda','tienda','cubes',[
          new Submenu('Nosotros','about'),
          new Submenu('Productos','productos')
        ]),
        new Menu('Ventas','ventas','shipping',[
          new Submenu('Ultimos pedidos','pedidos')
        ]),
        /*new Menu('Analisis','analisis','line chart',[
          new Submenu('Chart','chart')
        ]),*/
        new Menu('Articulos','articulos','browser',[
          //new Submenu('Tags','tags'),
          new Submenu('Productos','producto')
          
        ]),
        new Menu('Chat','chat','talk outline',[
          new Submenu('Chat','chatt')
        ])
    ];
    this.currentMenu = this.menus[0];
  }

}
