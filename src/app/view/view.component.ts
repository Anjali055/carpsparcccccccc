// import { Component, OnInit } from '@angular/core';
// import { User } from '../user';
// import { ApiServicesService } from '../api-services.service';

// @Component({
//   selector: 'app-view',
//   templateUrl: './view.component.html',
//   styleUrls: ['./view.component.css']
// })
// export class ViewComponent implements OnInit {

//   user: any;

//   constructor() {

//   }

//   ngOnInit() {
//     this.getAll();
//   }   

//   send(data)
//   {
//       this.user=data
//       sessionStorage.setItem('aa',this.user);
      
//       console.log(JSON.stringify(this.user))
//   }

//   getAll() {
    
//     this.apiServices.getAll().subscribe(res => {
//       this.user=res
//     }, error => {

//     }
//     )
//   }


//   deleteById(data)
//   {
//     console.log(JSON.stringify(data))
//       this.apiServices.delete(data).subscribe(
//           res=>{this.user=res},
//           err=>{
//            this.user=err
//           }
//       )
//   }

//   // getById(data)
//   // {
//   //   console.log(JSON.stringify(data))
//   //       this.apiServices.getById(data).subscribe(

//   //             res=>{this.user = res},
//   //             err=>{
//   //               this.user=err
//   //              }
//   //       )
//   // }

// }

















// // getAll() {
// //   this.apiServices.getAll().subscribe(res => {
// //     console.log(res);
// //   }, error => {

// //   }
// //   )
// // }