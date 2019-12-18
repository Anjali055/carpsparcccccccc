import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
export class User{
  constructor(
    public status:string,
     ) {}
}
@Injectable({
  providedIn: 'root'
})
 export class AuthenticationService {

   constructor(private httpClient:HttpClient) { }

   authenticate(mobileno, password) {
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(mobileno + ':' + password) });
    return this.httpClient.get<User>('http://localhost:6545/api/signup/validateLogin',{headers}).pipe(
     map(
       userData => {
        sessionStorage.setItem('mobileno',mobileno);
        return userData;
       }
     )
    );
   }
   isUserLoggedIn() {
     const user = sessionStorage.getItem('mobileno');
     console.log(!(user === null));
   
       return ! (user === null);
   }
   logOut() {
     sessionStorage.removeItem('mobileno');
   }
 }
