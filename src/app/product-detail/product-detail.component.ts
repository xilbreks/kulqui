import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../producto.service';
import { MyBagService } from '../my-bag.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId:number;
  producto:any;
  constructor(private activatedRoute:ActivatedRoute, private productoService:ProductoService,private myBagService:MyBagService) {
    this.activatedRoute.params.subscribe((params:any)=>{
      this.productId = params.id;
    });
    this.productoService.getProducto(this.productId).subscribe((product)=>{
      this.producto = product;
    });
  }

  agregar(cantidad): boolean{
    this.myBagService.agregar(this.producto,cantidad.value,this.producto.price);
    return false;
  }

  ngOnInit() {
  }

}
