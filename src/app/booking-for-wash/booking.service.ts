import{Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';



@Injectable()

export class  BookService{

    constructor(private http:HttpClient){


    }

    public saveAllBook(data){
        let url='http://localhost:6545/api/books/createBook';
        
        return this.http.post(url,data);
    }
    

}