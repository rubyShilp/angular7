import {Component,Input,OnInit} from '@angular/core';
import {Router } from "@angular/router";
import { HttpServe } from './../../servers/httpServe/httpServe';
import {Users,userParams} from './../../mock/Login/login.mock';
import {encryption,showError} from './../../util/core';
import {isMobileOrEmail} from './../../util/tools';
import {MainComponent} from './../Main/main';
@Component({
    selector: "my-login",
    templateUrl: './../../../views/Login/login.html',
    providers: [
        HttpServe,
        userParams
    ]
})
export class LoginComponent implements OnInit{
    user:Object;//用户登录信息
    error:any;//错误提示信息
    constructor(private httpServe: HttpServe,private main:MainComponent,private router: Router,private dataInteraction:userParams) { 
        this.user=new Users("","","","");
        this.error=new showError(this.main);
        this.dataInteraction.codeShow=0;
    }
    ngOnInit(){
        //this.obtainCode();
    }
    //密码切换
    togglePassword(){
        this.dataInteraction.toggleHiddent=!this.dataInteraction.toggleHiddent;
    }
    //登录
    userLogin=function(){
        let params={};
        if(this.user.username==''){
            this.error.init('账号不能为空!');
            return;
        }else if(!isMobileOrEmail(this.user.username)){
            this.error.init('请输入邮箱账号或法大大账号!');
            return;
        }
        if(this.user.password==''){
            this.error.init('密码不能为空!');
            return;
        }
        if(this.dataInteraction.codeShow==1){
            params={username:this.user.username,password:encryption(this.user.password),code:this.user.code};
        }else{
            params={username:this.user.username,password:encryption(this.user.password)};
        }
        this.httpServe.post('/login',params).subscribe((res:any)=>{
            if(res.result==='success'){
                
            }else{
                this.dataInteraction.codeShow=res.code_show;
                this.obtainCode();
                //this.error.init(res.msg);
            }
        })
    }
    //图形校验码
    obtainCode(){
        this.user['verifyCode']='/verify_code?type=1&time='+new Date();
    }
}
