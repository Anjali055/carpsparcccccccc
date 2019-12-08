import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { signupService } from './signup.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [signupService]
})
export class SignUpComponent implements OnInit {
  signupModel: FormGroup;

  //used for button toggle
  public show_dialog: boolean = false;


  constructor(private Servicesignup: signupService,private toastr: ToastrService) {

    this.signupModel = new FormGroup({

      name: new FormControl(''),
      mobileno: new FormControl(),
      email: new FormControl(''),
      otp: new FormControl('')

    })


  }

  sersignup: any;

  public saveAction(data: any) {

    localStorage.setItem('key',data.mobileno);

    //alert(JSON.stringify(a))
    console.log(JSON.stringify(data));
    this.toastr.success("data inserted")
    


    this.Servicesignup.saveAllUser(data).subscribe
   
      (
        res => { this.sersignup = res },
        err => { this.sersignup = err }
        
      );



  }

  toggle() {

   
  }

  //to generate random numbers;
  codeGenerated = '';

  randomString() {

    
    //method of generate otp 
    this.show_dialog = !this.show_dialog;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    const stringLength = 10;
    let randomstring = '';
    for (let i = 0; i < stringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      randomstring += chars.substring(rnum, rnum + 1);
    }
    this.codeGenerated = randomstring;
    this.signupModel.get('otp').setValue(this.codeGenerated);
    return 0;
  }
//-----------------------------------------



  ngOnInit() {
  
  }

}
