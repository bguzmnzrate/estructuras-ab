import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthFirebaseService } from '../services/auth-firebase.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
  providers: [AuthFirebaseService]
})
export class SendEmailComponent implements OnInit {

  user:any = this.capturarUsuario();

  //public user$ = this.authSvc.returnUser();
  //public user$: Observable<any> = this.authSvc.isLogged().subscribe(user=>{})

  capturarUsuario(){
    const newuser = this.authSvc.returnUser();
    console.log('new user',newuser);
  }


  constructor(private authSvc:AuthFirebaseService) {
  }

  ngOnInit(): void {
  }

}
