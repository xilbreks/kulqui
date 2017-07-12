import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class VentasService {

  constructor(private authService:AuthService) {
  }

  agregar(items,uid,voucher,direccion){
    let fecha = new Date();
    this.authService.db.list('ventas').push({
      uid: uid,
      voucher: voucher,
      direccion: direccion,
      fecha: fecha.toString(),
      prods: items.map(item=>{
        let tmp = {
          name: item.producto.name,
          precio: item.precio,
          cantidad: item.cantidad
        };
        return tmp;
      })
    });
  }

  getVentas():Observable<any>{
    return new Observable<any>((observer)=>{
      this.authService.db.list('ventas').subscribe((data)=>{
        observer.next(data);
      });
    });
  }

}
