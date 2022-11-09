import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
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
import { AuthFirebaseService } from '../services/auth-firebase.service';
//import { AngularFirestore } from '@angular/fire/compat/firebase.app';

@Injectable({
  providedIn: 'root'
})
export class ColeccionesService {
  usuarios$:any;
  usuariosCollection;

  constructor(firestore:Firestore,
    authFB:AuthFirebaseService) {
    this.usuariosCollection =collection(firestore,'Usuarios');
   }

   createUsuarioCollection(usuario:any, uidfb:string) {
    const userRef = doc(this.usuariosCollection, uidfb);
    return setDoc(userRef,usuario,{ merge: true }).then((value:any)=>{
      return value.id;
    }).catch((err)=>{
      return err
    });
    /*return addDoc(this.usuariosCollection,usuario).then((value)=>{
          let uuid=value.id;
          return uuid;
        }).catch((err)=>{
          return err
     });*/
  };
  getUsuarios():Observable<any[]>{
    return collectionData(this.usuariosCollection, { idField: 'Usuarios' });
  }

   /*async crearColeccionUsuarios(nombre:string, rut:string, direccion:string, email:string, uid:string){
    await setDoc(doc(db, "usuarios", uid), {
      nombre:nombre,
      rut:rut,
      direccion:direccion,
      email:email,
      perfil: 'cliente',
      contrasena: null

    });
   }*/





}
