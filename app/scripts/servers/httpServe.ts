import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class HttpServe {
  constructor(private http: HttpClient) {}
  get(url: string, params: any) {
    return this.http.get(url, { params: params });
  }
  post(url: string, parameter: any) {
    // let parmas=parameter;
    // if(isJson(parameter)){
    //     parmas=urlParams(parameter);
    // }
    return this.http.post(url, parameter);
  }
}
