import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  authState
} from '@angular/fire/auth';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { LoginData, RegisterData } from '../interfaces/login-data.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

 constructor(
  //private angularfireauth: AngularFireAuth,
  private auth: Auth) {}

  login(loginData: LoginData) {
    return signInWithEmailAndPassword(this.auth, loginData.email, loginData.password);
  }

  registrar({ email, contrasena2 }: RegisterData) {
    return createUserWithEmailAndPassword(this.auth, email, contrasena2);
  }

  logout() {
    return signOut(this.auth);
  }

  isLogged(): Observable<any>{
    return authState(this.auth)
  }

}
