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

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.getUserDetails();
    this.getUserPreferences();
  }

  getUserDetails(): void {
    this.userService.getUserDetails().subscribe(
      (data: any) => {
        this.user = data.user;
      },
      (error) => {
        console.error('Error fetching user details', error);
      }
    );
  }

  getUserPreferences(): void {
    this.userService.getUserPreferences().subscribe(
      (data: any) => {
        this.preferences = data.preferences;
      },
      (error) => {
        console.error('Error fetching user preferences', error);
      }
    );
  }

  updateUserDetails(): void {
    this.userService.updateUserDetails(this.user).subscribe(
      (response) => {
        console.log('User details updated successfully', response);
        alert('User details updated successfully.');
      },
      (error) => {
        console.error('Error updating user details', error);
      }
    );
  }

  deleteUserAccount(): void {
    if (confirm('Are you sure you want to delete your account?')) {
      this.userService.deleteUserAccount().subscribe(
        (response) => {
          console.log('Account deleted successfully', response);
          alert('Account deleted successfully.');
          this.router.navigate(['/']);
        },
        (error) => {
          console.error('Error deleting account', error);
        }
      );
    }
  }
}