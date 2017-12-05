import {Injectable,Component,OnInit} from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpInterceptor, HttpHeaderResponse, HttpSentEvent, HttpProgressEvent, HttpResponse, HttpClient } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import {isJson,urlParams,showError} from './../../util/core';
@Injectable()
export class JWTInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
        let contentType="";
        let params={};
        if(isJson(req.body)){
            contentType='application/x-www-form-urlencoded';
            params=urlParams(req.body);
        }else{
            contentType='multipart/form-data';
            params=req.body;
        }
        const jwtReq = req.clone({
            headers: req.headers.set('Content-Type', contentType),
            body:params
        });
        return next.handle(jwtReq).map((res:any)=>{
            if (res instanceof HttpResponse) {
                if(res.status === 401) {
                  
                }
            }
            return res;
        })
    }
}