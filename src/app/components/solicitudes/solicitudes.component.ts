import { Component, OnInit, TemplateRef } from '@angular/core';
//Forms
import {
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup
} from '@angular/forms';
//NgBootstrap
import {
  NgbModal,
  NgbModalOptions
} from '@ng-bootstrap/ng-bootstrap';
import { FullComponent } from 'src/app/layouts/full/full.component';
//Services

//SweetAlert
import Swal from 'sweetalert2';
import { SolicitudesService } from './services/solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.scss']
})
export class SolicitudesComponent implements OnInit {
  solicitudes:any[]=[];
  uuid:string='';

  form=new FormGroup({
    nombreSolicitud:new FormControl('',Validators.required),
    archivo:new FormControl('',Validators.required)
  });

  constructor(private solicitudesService:SolicitudesService,
              private fb: FormBuilder,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getSolicitudes();
  }

  //ModalOptions
  modalTitle:string="Crear Solicitud";
  action:string="create";
  ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      size:'lg'
  };

  getSolicitudes(): void {
    this.solicitudesService.getSolicitudes().subscribe(data=>{
      this.solicitudes=data;
    },(error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message
      });
    });
  }

  createSolicitudes(): void {
    Swal.fire('Un momento...');
    Swal.showLoading();

    let solicitud=this.form.value;
    //solicitud.description=solicitud.description.toUpperCase();
    this.solicitudesService.createSolicitud(solicitud).then((uuid:any)=>{
      Swal.hideLoading();
        Swal.fire({
          icon: 'success',
          title: 'Solicitud creada correctamente',
          showConfirmButton: false,
          timer: 5000
        });
        this.form.reset();
    }).catch(err=>{
      Swal.hideLoading();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err
        });
    });
  }

  updateSolicitud(): void {
    Swal.fire('Un momento...');
    Swal.showLoading();

    let solicitud=this.form.value;
    //solicitud.description=solicitud.description.toUpperCase();

    let uuid=this.uuid;

    this.solicitudesService.updateSolicitud(solicitud,uuid).then((uuid:any)=>{
      Swal.hideLoading();
        Swal.fire({
          icon: 'success',
          title: 'Insumo actualizado correctamente',
          showConfirmButton: false,
          timer: 5000
        });
        this.form.reset();
    }).catch(err=>{
      Swal.hideLoading();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err
        });
    });
  }

  openModal(content:TemplateRef<any>,action:string,solicitud:any) {
    if(action=='create'){
      this.form.reset();
      this.modalTitle="Crear Solicitud";
      this.modalService.open(content,this.ngbModalOptions);
      this.action=action;
    }else{
      this.uuid=solicitud.solicitud;
      this.form.patchValue({
        nombreSolicitud:solicitud.nombreSolicitud,
        archivo: solicitud.archivo

      });
      this.modalTitle="Actualizar Solicitud";
      this.modalService.open(content,this.ngbModalOptions);
      this.action=action;
    }
  }



}
