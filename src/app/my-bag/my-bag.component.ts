import { Component, OnInit } from '@angular/core';
import { MyBagService } from '../my-bag.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-bag',
  templateUrl: './my-bag.component.html',
  styleUrls: ['./my-bag.component.css']
})
export class MyBagComponent implements OnInit {
  items:any[];
  total:number=0;
  errorMsg:boolean=false;
  constructor(private myBagService:MyBagService, private authService:AuthService,private router:Router) {
    this.myBagService.items.subscribe((items)=>{
      this.items = items;
      let tmp=0;
      for(let i=0; i<this.items.length; i++){
        tmp = tmp + items[i].cantidad*items[i].precio;
      }
      this.total = tmp;
    });
  }

  eliminarProducto(item){
    this.myBagService.quitar(item);
  }

  pagar(){
    this.authService.auth.authState.subscribe((user)=>{
      if(user){
        this.router.navigate(['/tienda/compra']);
      }else{
        this.errorMsg = true;
        setTimeout(()=>{
          this.errorMsg = false;
        },5000);
      }
    });
  }

  ngOnInit() {
  }

}
