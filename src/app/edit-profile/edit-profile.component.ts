import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { editProfileService } from './editProfile.service';
import { userSignupModel } from '../model/userSignupmodel'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [editProfileService]
})
export class EditProfileComponent implements OnInit {


  editModel: FormGroup;
  submitted = false;
  sigupclassobj;
  constructor(private epservice: editProfileService,private router: Router,private toastr:ToastrService) {

    //assigning usermodelobject to tempobj(sigupclassobj)
    this.sigupclassobj = userSignupModel;

    this.editModel = new FormGroup({

      name: new FormControl('',Validators.required),
      mobileno: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      pincode: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      id: new FormControl(0),
      otp:new FormControl(''),
      password:new FormControl(''),

    })
  }
  
  gotoPageChangePassword() {
    this.router.navigate(['MenuDashboard/changepassword']);
  }
  sessionobj: any;
  getmethoddata: any;
  userdata: any;

  ngOnInit() {

    this.sessionobj = localStorage.getItem('key');
    console.log("call from nginti");
    console.log(this.sessionobj)


    //--call to the getbymobileno----
    this.getByMobileno(this.sessionobj);


  }
  updateEditProfileAction() {
    //console.log(htmObject);
    console.log("data from the model.....")
    console.log(JSON.stringify(this.editModel.value));

    this.toastr.success("User is Inserted SuccessFully");


    this.epservice.updateRecord(this.editModel.value).subscribe(res => { this.userdata = res },
      err => { this.userdata = err }

    );

    //this.sessionobj= sessionStorage.getItem('key')

    //console.log(this.sessionobj);



  }

  getByMobileno(sessionobj) {
    this.getmethoddata = this.epservice.getBymobileno(sessionobj).subscribe(
      res => {
        console.log(res);
        this.editModel.patchValue(res[0]);
        console.log("from model-------------------------------")

    console.log(JSON.stringify(this.editModel.value));

      },
      err => { this.userdata = err }
    );
    
  }


  get f() { return this.editModel.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.editModel.invalid) {
          return;
      }

      alert('SUCCESS!! :-)')

}

}