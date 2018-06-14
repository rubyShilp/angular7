import {Injectable} from '@angular/core';
import {Users} from './../../mock/Login/login.mock';
import { Subject }    from 'rxjs';
@Injectable()
export class LoginUserServe{
    private users=new Subject<JSON>();
    users$=this.users.asObservable();
    getUsers(value:JSON){
      this.users.next(value);
    }
}