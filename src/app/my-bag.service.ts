import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class MyBagService {
  private _cantidad:BehaviorSubject<number>=new BehaviorSubject<number>(0);
  public cantidad:Observable<number>=this._cantidad.asObservable();
  private _items:BehaviorSubject<any[]>=new BehaviorSubject<any[]>([]);
  public items:Observable<any[]>=this._items.asObservable();
  private preitems:any[]=[];

  constructor() {
    this._cantidad.next(0);
  }

  agregar(item,cant,precio):void{
    this.preitems.push({
      producto: item,
      cantidad: cant,
      precio: precio
    });
    this._items.next(this.preitems);
    this._cantidad.next(this.preitems.length);
  }

  quitar(item):void{
    let aprobados:any[] = [];
    for(let i=0; i<this.preitems.length; i++){
      if(this.preitems[i]!==item)
        aprobados.push(this.preitems[i]);
    }
    this.preitems = aprobados;
    this._items.next(this.preitems);
    this._cantidad.next(this.preitems.length);
  }

  limpiar():void{
    this.preitems = [];
    this._items.next(this.preitems);
    this._cantidad.next(this.preitems.length);
  }
  
}
