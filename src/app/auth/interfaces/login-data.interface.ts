export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  uid: string;
  nombre: string;
  rut: string;
  email: string;
  direccion: string;
  contrasena: string;
  contrasena2: string;
  perfil: 'cliente' | 'admin' ;
}
