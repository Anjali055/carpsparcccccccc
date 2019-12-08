import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { setPasswordService } from './set-password.service';
import { JsonPipe } from '@angular/common';



@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css'],
  providers: [setPasswordService]

})
export class SetPasswordComponent implements OnInit {


  setpassowrdModule: FormGroup

  constructor(private setpassservice: setPasswordService) {
       this.setpassowrdModule = new FormGroup({

        varpassword: new FormControl(''),
        varconfirmPassword: new FormControl('')

      })

      


  }
  

  subscribe_serSetpassword: any;
  sessionmobile: any;
  temppass:any;

  updatePasswordAction(data) {
    this.temppass=data.varpassword;

    console.log(JSON.stringify(data));
    console.log(this.temppass);

    this.sessionmobile= localStorage.getItem('key');
    console.log(this.sessionmobile);
    
    this.setpassservice.update_password(this.temppass,this.sessionmobile).subscribe

    (
      res => { this.subscribe_serSetpassword=res },
      err => { this.subscribe_serSetpassword = err }
      
    );




  }
  


  ngOnInit() {

   
    
  }

}
