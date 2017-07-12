import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService {

  constructor(
    public auth: AngularFireAuth,
    public db: AngularFireDatabase
  ) {
    console.log(auth.authState);
  }

  login(email, password) {
    return this.auth.auth.signInWithEmailAndPassword(email,password);
  }

  logout() {
    this.auth.auth.signOut();
  }

  signUp(email, password) {
    return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }

  isLogged(): Observable<boolean> {
    return new Observable<boolean>((observer)=>{
      this.auth.authState.subscribe(user=>{
        if(user){
          observer.next(true);
        }else{
          observer.next(false);
        }
      })
    });
  }

  isAdmin(): Observable<boolean> {
    return new Observable<boolean>((observer)=>{
      this.auth.authState.subscribe(user=>{
        if(user){
          this.db.object(`users/${user.uid}`, { preserveSnapshot: true })
            .subscribe(snapshot=>{
              observer.next(snapshot.val().admin);
            })
        }else{
          observer.next(false);
        }
      })
    });
  }


}
