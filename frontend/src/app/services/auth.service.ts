


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/login';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password }).pipe(
      tap(response => {
        if (response.token) {
          // localStorage.setItem('user', (response['user']));
        localStorage.setItem('token', (response['token']));
        localStorage.setItem('user', (response['user']));
          
          console.log(response.token.email)
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  getRenterDetails(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/renter/${email}`);
  }

  // getUser(): string | null {
  //   return localStorage.getItem('user');
  // }

  getUser(): any {
    // const token = this.getToken();
    // return token ? this.decodeToken(token) : null;
  }

  private decodeToken(token: string): any {
    try {
      // return jwt_decode(token);
    } catch (Error) {
      console.error('Error decoding token:', Error);
      return null;
    }
  }
}




// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private baseUrl = 'http://localhost:3000/api/renter';

//   constructor(private http: HttpClient) { }

//   getRenterDetails(email: string): Observable<any> {
//     return this.http.get(`${this.baseUrl}/renter/${email}`);
//   }
// }
