import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { editProfileService } from './editProfile.service';
import { userSignupModel } from '../model/userSignupmodel'


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  providers: [editProfileService]
})
export class EditProfileComponent implements OnInit {


  editModel: FormGroup;

  sigupclassobj;
  constructor(private epservice: editProfileService) {

    //assigning usermodelobject to tempobj(sigupclassobj)
    this.sigupclassobj = userSignupModel;

    this.editModel = new FormGroup({

      name: new FormControl(''),
      mobileno: new FormControl(''),
      email: new FormControl(''),
      pincode: new FormControl(''),
      address: new FormControl(''),
      id: new FormControl(0),
      otp:new FormControl(''),
      password:new FormControl(''),

    })
  }

  sessionobj: any;
  getmethoddata: any;
  userdata: any;

  ngOnInit() {

    this.sessionobj = sessionStorage.getItem('key');
    console.log("call from nginti");
    console.log(this.sessionobj)


    //--call to the getbymobileno----
    this.getByMobileno(this.sessionobj);


  }
  updateEditProfileAction() {
    //console.log(htmObject);
    console.log("data from the model.....")
    console.log(JSON.stringify(this.editModel.value));


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
      },
      err => { this.userdata = err }
    );

  }




}
