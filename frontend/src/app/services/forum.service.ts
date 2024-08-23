// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ForumService {
//   private apiUrl = 'http://localhost:3000/api/forum'; // Your API endpoint

//   constructor(private http: HttpClient) {}

//   getForumDetails(forumId: string): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${forumId}`);
//   }
// }




import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getForumDetails(forumId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/forum/${forumId}`);
  }
}


