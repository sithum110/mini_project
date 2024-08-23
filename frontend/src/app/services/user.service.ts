import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/userapi'; // Adjust with your actual API URL

  constructor(private http: HttpClient) {}

  getUserDetails(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/details`);
  }

  getUserPreferences(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/preferences`);
  }

  updateUserDetails(user: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update`, user);
  }

  deleteUserAccount(): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete`);
  }

  getRenterDetails(email: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/renter/${email}`);
}
}