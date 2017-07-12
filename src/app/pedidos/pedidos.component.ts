import { Component, OnInit } from '@angular/core';
import { VentasService } from '../ventas.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  ventas:any[];
  constructor(private ventasService:VentasService,private usersService:UsersService) {
    this.ventasService.getVentas().map((ventas)=>{      
      return ventas.map((venta)=>{
        let vv = {
          direccion: venta.direccion,
          voucher: venta.voucher,
          prods: venta.prods,
          uid: venta.uid,
          user: null
        };
        return vv;
      });
    }).subscribe((ventas)=>{
      this.ventas = ventas;
      for(let i=0; i<ventas.length; i++){
        this.usersService.getUser(ventas[i].uid).subscribe((user)=>{
          ventas[i].user = user;
        });
      }
    })
  }

  ngOnInit() {
  }

}
