import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User, Change } from './user.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User ;
  user: User[];
  change: Change[];

  constructor(private http: HttpClient) { }

  //HttpMethods

  // environment에 있는 apiBaseUrl를 매칭시켜주는 코드
  postUser(user: User){
    return this.http.post(environment.apiBaseUrl+'/member/signup', user);
  }

  login(user: User){
    return this.http.post(environment.apiBaseUrl +'/member/login', user);
  }

  Searcn(user: User){
    return this.http.post(environment.apiBaseUrl+'/boards/search/user', user);
  }

  changepass(change: Change){
    return this.http.post(environment.apiBaseUrl +'/member/updatePass', change, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    });
  }

  changeInfo(change: Change){
    return this.http.post(environment.apiBaseUrl +'/member/update', change, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    });
  }

  checkuser(){
    const token = true;
    if(localStorage.getItem('token')==null)
    {
      return false;
    }
    else if(localStorage.getItem('token')!=null)
    {
      return token;
    }
  }

  otherInfo(user: User){
    return this.http.post(environment.apiBaseUrl +'/member/userinfo', user);
  }


  getUserList() {
    return this.http.get(environment.apiBaseUrl+'/member/info');
  }

  profile() {
    return this.http.get(environment.apiBaseUrl+'/me', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
      })
    });
  }


  

  // // Help Methods

  // getUserProfile() {
  //   return this.http.get(environment.apiBaseUrl + '/userProfile');
  // }
  
  // setToken(token: string){
  //   //saved
  //   localStorage.setItem('token', token);
  // }

  // deleteToken() {
  //   localStorage.removeItem('token');
  // }

  //   getUserPayload() {
  //     // 이부분 뭐하는 건지? part2 24:00
  //     var token = localStorage.getItem('token');
  //     if (token){
  //       var userPayload = atob(token.split('.')[1]);
  //       return JSON.parse(userPayload);
  //     }
  //     else
  //       return null;
  //   }

  //   isLoggedIn() {
  //     var userPayload = this.getUserPayload();
  //     if (userPayload)
  //     {
  //       return userPayload.exp > Date.now() / 1000;
  //     }
  //     else
  //       return false;
  //   }
}
