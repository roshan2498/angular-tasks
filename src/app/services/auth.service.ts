import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import 'rxjs/add/operator/map'


@Injectable()
export class AuthService {
  constructor(private http: Http) {
  }

  private tokenNotExpired()
{
    const jwtService: JwtHelperService = new JwtHelperService();
    const item: string = jwtService.tokenGetter();
    return item != null && !jwtService.isTokenExpired(item);
}

  login(credentials) { 
   return this.http.post('/api/authenticate', 
      JSON.stringify(credentials))
      .map(response => {
        let result = response.json();
        if(result && result.token){
          localStorage.setItem('token',result.token);
          return true;
        }

        return false; 
      });
  }

  logout() {
    localStorage.removeItem('token'); 
  }

  isLoggedIn() { 
    return this.tokenNotExpired();
  }

  get currentUser(){
    let token = localStorage.getItem('token');
    if(!token) return null;

    return new JwtHelperService().decodeToken(token);
  }
}

