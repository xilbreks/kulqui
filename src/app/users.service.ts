import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

  constructor(
    private authService:AuthService
  ) {
  }

  getUsers():Observable<any>{
    return new Observable<any>((observer)=>{
      this.authService.db.list('users').subscribe((data)=>{
        observer.next(data);
      });
    });
  }

  getUser(id:string):Observable<any>{
    return new Observable<any>((observer)=>{
      this.authService.db.object(`users/${id}`).subscribe((data)=>{
        observer.next(data);
      });
    });
  }

  getMessages(id:string):Observable<any>{
    return new Observable<any>((observer)=>{
      this.authService.db.list(`users/${id}/messages`,{
        query: {
          limitToLast: 6,
        }
      }).subscribe((data)=>{
        observer.next(data);
      });
    });
  }

  pushMessage(id:string,msg,me:boolean):void{
    if(me){
      let fecha = new Date();
      this.authService.db.list(`users/${id}/messages`).push({me:me,text:msg,date:fecha.toString()})
        .then(()=>{
          this.authService.db.object(`users/${id}`).update({lastmessage:msg,read:false,messageDate:fecha.toString()});
        });
    }else{
      let fecha = new Date();
      this.authService.db.list(`users/${id}/messages`).push({me:me,text:msg,date:fecha.toString()})
        .then(()=>{
          this.authService.db.object(`users/${id}`).update({read:true,messageDate:fecha.toString()});
        });
    }
      
  }

}
