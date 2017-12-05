import { Pipe,PipeTransform} from '@angular/core';
@Pipe({name:"lineName"})//声明定义过滤器名称
//根据所要过滤的值转换成想要的值
export class BusinessLinePipe implements PipeTransform{
    private businesLinName="";
    transform(value:any):any{
         if(value==='1'){
             this.businesLinName="天猫";
         }else if(value==='2'){
             this.businesLinName="淘宝";
         }else{
             this.businesLinName="京东";
         }
         return this.businesLinName;
    }
};
@Pipe({name:"typeName"})
export class BusinessTypePipe implements PipeTransform{
    private businesTypeName="";
    transform(value:any):any{
         if(value==='1'){
             this.businesTypeName="物联网PBOSS";
         }else{
             this.businesTypeName="统一支付";
         }
         return this.businesTypeName;
    }
};
@Pipe({name:"levelName"})
export class EmergencyLevelPipe implements PipeTransform{
    private emergencyLevelName="";
    transform(value:any):any{
         if(value==='0'){
             this.emergencyLevelName="低";
         }else if(value==='1'){
             this.emergencyLevelName="中";
         }else{
             this.emergencyLevelName="高";
         }
         return this.emergencyLevelName;
    }
}; 
@Pipe({name:"stateName"})
export class StatePipe implements PipeTransform{
    private stateName="";
    transform(value:any):any{
         if(value==='1'){
             this.stateName="未完成";
         }else if(value==='2'){
             this.stateName="已提交";
         }else{
             this.stateName="已审核";
         }
         return this.stateName;
    }
}; 