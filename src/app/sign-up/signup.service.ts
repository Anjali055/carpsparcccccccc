import{Injectable} from '@angular/core'
import{HttpClient} from '@angular/common/http'

@Injectable()

export class  signupService{

    constructor(private http:HttpClient){


    }

    
  

    public saveAllUser(data){
        let url="http://localhost:6545/api/signup/createUser";
        
        return this.http.post(url,data);
    }



    

}