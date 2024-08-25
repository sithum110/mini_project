// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoommateService {

//   constructor(private http: HttpClient) {}

//   getMatchingRoommates(): Observable<any> {
//     return this.http.get('/api/roommates/getRecommendations'); // Adjust the API endpoint accordingly
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoommateService {

  private apiUrl = 'http://localhost:3000/api/getRecommendations'; // Adjust the API endpoint accordingly

  constructor(private http: HttpClient) {}

  getMatchingRoommates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

