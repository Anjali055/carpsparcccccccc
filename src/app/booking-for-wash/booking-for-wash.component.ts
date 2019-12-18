import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BookService } from './booking.service';
import { ToastrService } from 'ngx-toastr';
import { error } from 'util';

@Component({
  selector: 'app-booking-for-wash',
  templateUrl: './booking-for-wash.component.html',
  styleUrls: ['./booking-for-wash.component.css'],
  providers : [BookService]
})
export class BookingForWashComponent  {
  BookWashModel : FormGroup
  constructor(private book: BookService,private toastr: ToastrService) {
   
    this.BookWashModel = new FormGroup({
      vehicleName :new FormControl(''),
      vehicleType:new FormControl(''),
      contactPersonName :new FormControl(''),
      contactdetails :new FormControl(''),
      serviceType:new FormControl(''),
      description :new FormControl(''),
      pickup:new FormControl(''),
      location:new FormControl(''),
      pickupdate:new FormControl(''),
      budget:new FormControl(''),
    })
   }

   bookwash: any;

   public saveAction(data: any) {

    localStorage.setItem('key',data.mobileno);

    //alert(JSON.stringify(a))
    console.log(JSON.stringify(data));
    this.toastr.success("data inserted")

    this.book.saveAllBook(data).subscribe
   
      (
        res => { this.bookwash = res },
        err => { this.bookwash = err }
        
      );

  }

   BookForWash(books:any){
    //alert(JSON.stringify(books))
    console.log(JSON.stringify(books))
    alert(JSON.stringify(books))
    
this.book.saveAllBook(books).subscribe((response)=>{
    console.log(response);
},    (error)=> {
  console.log(error)
})  ;

    
   }

   
  }

