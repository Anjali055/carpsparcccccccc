import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-booking-for-wash',
  templateUrl: './booking-for-wash.component.html',
  styleUrls: ['./booking-for-wash.component.css']
})

export class BookingForWashComponent  {

  BookWashModel : FormGroup
  constructor(private book:FormBuilder) {

    this.BookWashModel = this.book.group({
      vihiclename :[''],
      vehicletype:[''],
      contactPersonName :[''], 
      contactdetails :[''],
      servicetype:[''],
      requireDescription :[''],
      needpickup:[''],
      arealocation:[''],
      pickupdate:[''],
      budprice:[''],
    })
   }

   BookForWash(books:any){
    //alert(JSON.stringify(books))
    console.log(JSON.stringify(books))
  
   }
  }

