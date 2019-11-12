import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  editModel:FormGroup;

  constructor( private fb:FormBuilder) {

    this.editModel=this.fb.group({

      Name:[''],
      Mobileno:[''],
      Email:[''],
      Pincode:[''],
      Address:['']   

  })
  }
  saveAction(aa){
    
    alert(JSON.stringify(aa))
}
  ngOnInit() {
  }

}
