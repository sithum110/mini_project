import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoommateService {

  constructor(private http: HttpClient) {}

  getMatchingRoommates(): Observable<any> {
    return this.http.get('/api/roommates/match'); // Adjust the API endpoint accordingly
  }
}
