//用户登录信息
export class Users{
    constructor(
        public username:string,
        public password:string,
        public code:string,
        public verifyCode:string
    ){}
}
//界面交互数据参数信息
export class userParams{
    public codeShow:Number;
    public toggleHiddent:Boolean;
}