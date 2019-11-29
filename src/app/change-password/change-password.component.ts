import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {

  changePasswordModel : FormGroup
  constructor(private changepass:FormBuilder) {

    this.changePasswordModel = this.changepass.group({
      OldPassword :[''],
      NewPassword:[''],
      ConfirmPassword :['']
     
    })
   }

   ChangePassword(password:any){
    alert(JSON.stringify(password))
    console.log(JSON.stringify(password))
  
   }

}
