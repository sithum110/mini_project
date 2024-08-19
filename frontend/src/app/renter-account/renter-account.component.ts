import { Component, OnInit } from '@angular/core';
import {  UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-renter-account',
  standalone:true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './renter-account.component.html',
  styleUrls: ['./renter-account.component.css'],
  
})
export class RenterAccountComponent implements OnInit {
  user: any = {};
  preferences: any = {};

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    const email = localStorage.getItem('userEmail'); // Assuming email is stored in local storage after login
    if (email) {
      this.http.get(`/api/renters/${email}`).subscribe((data: any) => {
        this.user = data;
        this.preferences = data; // Assuming preferences are part of the same data object
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  updateUserDetails(): void {
    const email = localStorage.getItem('userEmail');
    if (email) {
      this.http.put(`/api/renters/${email}`, { ...this.user, ...this.preferences }).subscribe(
        (data: any) => {
          console.log('Details updated', data);
        },
        (error: any) => {
          console.error('Update failed', error);
        }
      );
    }
  }
}