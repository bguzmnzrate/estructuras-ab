import { Component, OnInit } from '@angular/core';
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
import { SolicitudesadminService } from './services/solicitudesadmin.service';

@Component({
  selector: 'app-solicitudesadmin',
  templateUrl: './solicitudesadmin.component.html',
  styleUrls: ['./solicitudesadmin.component.scss']
})
export class SolicitudesadminComponent implements OnInit {

  solicitudes:any[]=[];
  uuid:string='';

  constructor(private solicitudesadminService:SolicitudesadminService,
              private fb: FormBuilder,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getSolicitudes();
  }

  getSolicitudes(): void {
    this.solicitudesadminService.getSolicitudes().subscribe(data=>{
      this.solicitudes=data;
    },(error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message
      });
    });
  }



}
