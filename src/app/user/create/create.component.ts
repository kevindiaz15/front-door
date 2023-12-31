import { Component } from '@angular/core';
import { UserservicesService } from 'app/services/userservices.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  username!:string;
  email!:string;
  password!:string;

  constructor(private userService:UserservicesService){}

  createUser():void{
    this.userService.create(this.username,this.email,this.password)
      console.log("user created");
  }

}
