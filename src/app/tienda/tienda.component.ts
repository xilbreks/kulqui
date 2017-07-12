import { Component, OnInit } from '@angular/core';
import { TagService } from '../tag.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  
  tags:any;
  constructor(private tagService:TagService){
    this.tagService.getTags().subscribe((tags)=>{
      this.tags = tags;
    });
  }

  ngOnInit() {
  }

}
