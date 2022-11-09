import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterData } from 'src/app/auth/interfaces/login-data.interface';
import { AuthFirebaseService } from 'src/app/auth/services/auth-firebase.service';
import Swal from 'sweetalert2';
import { ColeccionesService } from './colecciones.service';


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
    private authFS:AuthFirebaseService,
    private usuariosService:ColeccionesService
  ) { }

  ngOnInit(): void {

  }
  async capturarUid(){
    const uid = await this.authFS.getUid();
    console.log('uid ->',uid);

  }

  registrar(): void {
    Swal.fire('Un momento...');
    Swal.showLoading();
    let data=this.formRegistro.value;
    //console.log(data);
    this.authFS.registrar(data)
    .then((data)=>{
      const uidfb = data.user.uid;
      this.createUsuario(uidfb);
      this.capturarUid();
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
  createUsuario(uidfb:string): void {
    Swal.fire('Un momento...');
    Swal.showLoading();

    let usuario=this.formRegistro.value;
    this.formRegistro.value.contrasena = null;
    this.formRegistro.value.contrasena2 = null;

    this.usuariosService.createUsuarioCollection(usuario, uidfb).then((uuid:string)=>{
      Swal.hideLoading();
        Swal.fire({
          icon: 'success',
          title: 'Cliente registrado correctamente',
          showConfirmButton: false,
          timer: 5000
        });
        //this.getCustomers();
        this.formRegistro.reset();
    }).catch(err=>{
      Swal.hideLoading();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err
        });
    });
  }



}
