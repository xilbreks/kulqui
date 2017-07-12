import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId:string;
  producto:any;
  constructor(private route:ActivatedRoute, private productoService:ProductoService) {
    this.route.params.subscribe((params:any)=>{
      this.productId = params.id;
      this.productoService.getProducto(this.productId).subscribe((producto)=>{
        this.producto = producto;
      });
    });
  }

  actualizar(name,description,price): boolean{
    this.productoService.updateProducto(this.productId,description.value,name.value,price.value);
    return false;
  }

  ngOnInit() {
  }

}
