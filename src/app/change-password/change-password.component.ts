import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent  {

  changePasswordModel : FormGroup
  constructor() {

    this.changePasswordModel = new FormGroup({
      OldPassword :new FormControl(''),
      Newpassword: new FormControl(''),
      ConfirmPassword :new FormControl('')
     
    })
   }

   ChangePassword(passworddata:any){
    alert(JSON.stringify(passworddata))
    console.log(JSON.stringify(passworddata))
  
   }

}
