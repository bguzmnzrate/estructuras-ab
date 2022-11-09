import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  authState,
  onAuthStateChanged
} from '@angular/fire/auth';
import {
  Firestore,
  collectionData,
  collection,
  setDoc,
  doc,
  addDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  startAt,
  endAt
}from '@angular/fire/firestore';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { LoginData, RegisterData } from '../interfaces/login-data.interface';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {

  db:any;

 constructor(
  //private angularfireauth: AngularFireAuth,
  private auth: Auth) {}

  login(loginData: LoginData) {
    return signInWithEmailAndPassword(this.auth, loginData.email, loginData.password);
  }

  registrar({ email, contrasena2 }: RegisterData) {
    return createUserWithEmailAndPassword(this.auth, email, contrasena2)/*.then(function(datauid){
      console.log('uid -> ',datauid.user.uid)
      const uidfb = datauid.user.uid
    });*/
  }

  logout() {
    return signOut(this.auth);
  }

  isLogged(): Observable<any>{
    return authState(this.auth)
  }

  async getUid(){//obtiene el uid del usuario que inicia sesion
    const user = await this.auth.currentUser;
    if (user === null){
        return null;
    }
    else{
        return user.uid;
    }
  };

  async getDocumentsUsuarios(){

  }

  /*authchange(): Observable<any>{
    //return onAuthStateChanged(this.auth)
  }*/



}
