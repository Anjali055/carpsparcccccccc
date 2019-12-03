import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { signupService } from './signup.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers:[signupService]
})
export class SignUpComponent implements OnInit {
  signupModel: FormGroup;


  constructor(private Servicesignup:signupService) {

    this.signupModel = new FormGroup({

      name:new FormControl(''),
      mobileno: new FormControl(),
      email:new FormControl(''),
      otp:new FormControl('')

    })

    
  }

    sersignup:any;

   public saveAction(data:any) {

    //alert(JSON.stringify(a))
    console.log(JSON.stringify(data));


    this.Servicesignup.saveAllUser(data).subscribe
    (
      res=>{this.sersignup=res},
      err=>{this.sersignup=err}
      );



  }


  ngOnInit() {
  }

}
