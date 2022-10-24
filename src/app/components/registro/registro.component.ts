import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/auth/services/auth-firebase.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  formRegistro = new FormGroup({
    nombre:new FormControl('',Validators.required),
    rut:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    direccion:new FormControl('',Validators.required),
    contrasena:new FormControl('',Validators.required),
    contrasena2:new FormControl('',Validators.required)
  })

  constructor(
    private router: Router,
    private authFS:AuthFirebaseService
  ) { }

  ngOnInit(): void {
  }

}
