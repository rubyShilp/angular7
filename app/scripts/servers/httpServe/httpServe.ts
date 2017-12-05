
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {isJson,urlParams} from './../../util/core';
@Injectable()
export class HttpServe{
    constructor(private http:HttpClient){}
    get(url:string){
       return this.http.get(url);
    }
    post(url:string,parameter:any){
        // let parmas=parameter;
        // if(isJson(parameter)){
        //     parmas=urlParams(parameter);
        // }
        return this.http.post(url,parameter);
    }
}
