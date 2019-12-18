import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from './authntication.service';
import { AuthGuardService } from './authGuard.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthGuardService]
  
})
export class LoginComponent implements OnInit {

  mobileno = '';
  password = '';
  invalidLogin = false;
  constructor(private router: Router, private loginservice: AuthenticationService,private toaster:ToastrService) { }
  ngOnInit() {

  }
  checkLogin() {
    if (this.loginservice.authenticate(this.mobileno, this.password)) {
      this.router.navigate(['/MenuDashboard']);
      this.invalidLogin = false;
    }
    else {

      this.invalidLogin = true;
    }
  }

}
