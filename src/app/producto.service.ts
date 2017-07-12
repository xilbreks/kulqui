import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class ProductoService {

  constructor(private authService:AuthService) {
  }

  getProductos():Observable<any>{
    return new Observable<any>((observer)=>{
      this.authService.db.list('products').subscribe((data)=>{
        observer.next(data);
      });
    });
  }

  getProducto(id):Observable<any>{
    return new Observable<boolean>((observer)=>{
      this.authService.db.object(`products/${id}`).subscribe((data)=>{
        observer.next(data);
      });
    });
  }

  updateProducto(id:string,des:string,name:string,price:number):void{
    this.authService.db.object(`products/${id}`).update({
      description: des,
      name: name,
      price: price
    });
  }

}
