import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'


// import { Users } from 
@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(username: string, password: string){
    return this.http.post('/api/authenticate', JSON.stringify({username: username, password: password }))
      .map((response: Response) => {
        //login successfull if there is a JWT in the response
        let user = response.json();
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      })
  }

  logout() {
    //remove user from localstorage to logout user
    localStorage.removeItem('currentUser');
  }

}
