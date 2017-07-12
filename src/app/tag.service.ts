import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class TagService {

  constructor(
    private authService:AuthService
  ) {

  }

  getTags():Observable<any>{
    return new Observable<any>((observer)=>{
      this.authService.db.list('tags').subscribe((data)=>{
        observer.next(data);
      });
    });
  }

}
