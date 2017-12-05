var qs=require('qs');
var md5=require('md5');
import {MainComponent} from './../component/Main/main';
//判断对象是否为json格式
export function isJson(obj:any){
    var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;  
    return isjson;
}
//参数序列化
export function urlParams(params:any){
    return qs.stringify(params);
}
//密码加密处理
export function encryption(password:string){
    return md5(password);
}
export class showError{
    constructor(private main:MainComponent){ }
    init(context:String){
        this.main.showHide=true;
        this.main.context=context;
        setTimeout(()=>{
            this.main.showHide=false;
            this.main.context='';
        },2000)
    }
}