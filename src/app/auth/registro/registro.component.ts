import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/auth/interfaces/login-data.interface';
import { AuthFirebaseService } from 'src/app/auth/services/auth-firebase.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  datosRegistro: RegisterData = {
    uid: '',
    nombre: '',
    rut: '',
    email: '',
    direccion: '',
    contrasena: '',
    contrasena2: '',
    perfil: 'cliente'
}

  formRegistro = new FormGroup({
    nombre:new FormControl('',Validators.required),
    rut:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    direccion:new FormControl('',Validators.required),
    contrasena:new FormControl('',Validators.required),
    contrasena2:new FormControl('',Validators.required),
    perfil:new FormControl('cliente')
  })




  constructor(
    private router: Router,
    private authFS:AuthFirebaseService
  ) { }

  ngOnInit(): void {

  }

  registrar(): void {
    Swal.fire('Un momento...');
    Swal.showLoading();
    let data=this.formRegistro.value;
    this.authFS.registrar(data)
    .then(()=>{
      Swal.hideLoading();
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        showConfirmButton: false,
        timer: 2000
       });
      this.router.navigate(['/solicitudes'])
    }).catch((e) =>{
       Swal.hideLoading();
       Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: e.message
      });
    });
  }



}
