import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { HeaderinnerComponent } from './headerinner/headerinner.component';
import { FooterinnerComponent } from './footerinner/footerinner.component';


@NgModule({
  declarations: [
    LoginComponent,
    CreateComponent,
    ProfileComponent,
    HeaderinnerComponent,
    FooterinnerComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
