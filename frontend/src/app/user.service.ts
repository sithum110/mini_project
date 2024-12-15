// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {

//   private baseUrl = 'http://localhost:3000/api';

//   constructor(private http: HttpClient) { }

//   getUserByEmail(email: string): Observable<any> {
//     return this.http.get(`${this.baseUrl}/renter/${email}`);
//   }

//   updateUser(user: any): Observable<any> {
//     return this.http.put(`${this.baseUrl}/renter/${user.email}`, user);
//   }
//   setItem(key: string, value: any): void {
//     localStorage.setItem(key, JSON.stringify(value));
//   }
// }

