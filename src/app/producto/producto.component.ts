import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos:any[];
  constructor(private productoService:ProductoService) {
    this.productoService.getProductos().subscribe((productos)=>{
      this.productos = productos;
    })
  }

  ngOnInit() {
  }

}
