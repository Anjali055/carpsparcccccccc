import{Injectable} from '@angular/core'

import { HttpClient } from '@angular/common/http';


@Injectable()

export class editProfileService{
    constructor(private http:HttpClient){

    }


     getBymobileno(mobileno:any){
         let url="http://localhost:6545/api/signup/getbymobileno/"+mobileno;
         return this.http.get(url);

    }

    updateRecord(editedData:any){
        let url="http://localhost:6545/api/signup/update";
        return this.http.put(url,editedData);

    }

    



}