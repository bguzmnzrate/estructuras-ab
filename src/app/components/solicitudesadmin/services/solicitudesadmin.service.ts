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

@Injectable({
  providedIn: 'root'
})
export class SolicitudesadminService {

  solicitudesCollection;

  constructor(firestore:Firestore) {
    this.solicitudesCollection =collection(firestore,'Solicitudes');
  }

  getSolicitudes():Observable<any[]>{
    return collectionData(this.solicitudesCollection, { idField: 'Solicitudes' });
  }

  updateSolicitud(solicitud:any,uuid:string) {
    const solicitudRef = doc(this.solicitudesCollection, uuid);
    return setDoc(solicitudRef,solicitud,{ merge: true }).then((value:any)=>{
      return value.id;
    }).catch((err)=>{
      return err
    });
  }
}
