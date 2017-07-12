import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ProductoService } from '../producto.service';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: any, args: string): any {
    if (!value || !args) return value;
    let filter = args.toLowerCase();
    return filter ? value.filter(prod=> prod.name.toLowerCase().indexOf(filter) != -1) : value;
  }
}

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos:any=[];
  
  constructor(private productoService:ProductoService) {
    this.productoService.getProductos().subscribe((data)=>{
      console.log('data',data);
      this.productos=data;
    });
  }

  ngOnInit() {
  }

}
