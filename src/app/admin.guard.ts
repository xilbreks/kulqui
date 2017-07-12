import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';
import 'rxjs/add/operator/do';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private auth: AuthService, 
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAdmin().do((isAdmin)=>{
      console.log('soy el guardia y digo que el admin es: ', isAdmin)
      if(!isAdmin) this.router.navigate(['/']);
    });
  }
}
