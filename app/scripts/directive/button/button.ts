import {Component,Input,Output,EventEmitter, OnInit} from '@angular/core';
@Component({
    selector:'fa-button',
    templateUrl:'./button.html',
    styles:[require('./button.less').toString()]
})
export class ButtonComponent implements OnInit{
    className:String;
    @Input() icon:String;
    @Input() height:Number=32;
    @Input() weight:Number=80;
    @Input() left:Boolean=true;
    @Input() right:Boolean=false;
    @Input() type:String='own';
    @Input() plain:Boolean=false;
    @Input() disabled:Boolean=false;
    @Output() click=new EventEmitter();
    //初始化参数值,并显示不同按钮主题颜色
    ngOnInit(){ 
        this.buttonType();
        this.iconRightLeft();
    }
    //单击
    eventClick(){
        if(this.disabled){
            return;
        }
        this.click.next();
    }
    //判断icon显示位置
    iconRightLeft(){
        if(this.left && this.right){
            this.left=false;
        }else if(this.left && !this.right){
            this.left=true;
        }else if(!this.left && this.right){
            this.right=true;
        }else if(!this.left && this.right){
            this.icon='';
        }
    }
    //按钮主题颜色选择
    buttonType(){
        if(this.type==='primary'){
            this.className='fa-button-primary';
            if(this.plain){
                this.className+=' is-plain-primary';
            }
        }else if(this.type==='success'){
            this.className='fa-button-success';
             if(this.plain){
                this.className+=' is-plain-success';
            }
        }else if(this.type==='info'){
            this.className='fa-button-info';
            if(this.plain){
                this.className+=' is-plain-info';
            }
        }else if(this.type==='warning'){
            this.className='fa-button-warning';
            if(this.plain){
                this.className+=' is-plain-warning';
            }
        }else if(this.type==='danger'){
            this.className='fa-button-danger';
            if(this.plain){
                this.className+=' is-plain-danger';
            }
        }else if(this.type==='own'){
            this.className='fa-button-own';
            if(this.plain){
                this.className+=' is-plain-own';
            }
        }
        if(this.disabled){
            this.className='fa-button-disabled'
        }
    }
}