import { Component, OnInit } from '@angular/core';
import { MyBagService } from '../my-bag.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { VentasService } from '../ventas.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  items:any[];
  total:number=0;
  success:boolean=false;
  errorVoucher:boolean=false;
  errorDireccion:boolean=false;
  userId:any;

  constructor(private myBagService:MyBagService,private authService:AuthService,private router:Router,private ventasService:VentasService){
    this.authService.auth.authState.subscribe((user)=>{
      if(!user){
        this.router.navigate(['/tienda/home']);
      }else{
        this.userId = user.uid;
      }
    });
    this.myBagService.cantidad.subscribe((cant)=>{
      if(cant==0)
        this.router.navigate(['/tienda/home']);
      this.myBagService.items.subscribe((items)=>{
        this.items = items;
        let tmp=0;
        for(let i=0; i<this.items.length; i++){
          tmp = tmp + items[i].cantidad*items[i].precio;
        }
        this.total = tmp;
      });
    });
  }

  pagar(voucher,direccion): boolean{
    if(voucher.value.length!=7){
      this.errorVoucher = true;
      return false;
    }
    if(direccion.value.length<5){
      this.errorDireccion = true;
      return false;
    }
    this.ventasService.agregar(this.items,this.userId,voucher.value,direccion.value);
    this.success = true;
    this.errorVoucher = false;
    this.errorDireccion = false;
    setTimeout(()=>{
      this.myBagService.limpiar();
      this.success = false;
      this.router.navigate(['/tienda/home']);
    },10000);
    return false;
  }

  ngOnInit() {
  }

}
