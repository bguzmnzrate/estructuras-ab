import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Reactive Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SendEmailComponent } from './send-email/send-email.component';


@NgModule({
  declarations: [
    AuthComponent,
    SendEmailComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
