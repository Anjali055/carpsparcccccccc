import { Component, OnInit } from '@angular/core';
import { FormsModule, FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupModel: FormGroup;


  constructor(private fb: FormBuilder) {

    this.signupModel = this.fb.group({

      Name: [''],
      Mobileno: [''],
      Email: [''],
      Otp: ['']

    })

  }

  saveAction(a) {

    alert(JSON.stringify(a))
  }


  ngOnInit() {
  }

}
