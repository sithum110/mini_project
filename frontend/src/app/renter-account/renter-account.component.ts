import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-renter-account',
  standalone: true,
  templateUrl: './renter-account.component.html',
  styleUrls: ['./renter-account.component.css'],
  imports: [FormsModule, RouterOutlet, RouterLink, RouterLinkActive]
})
export class RenterAccountComponent {
  renter = {
    fullName: '',
    email: '',
    phone: '',
    locationPreference: '',
    roommatePreference: '',
    lifestylePreference: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    this.http.post('/api/renter/update', this.renter).subscribe(
      response => {
        alert('Details updated successfully');
      },
      error => {
        console.error('Error updating details', error);
        alert('Failed to update details');
      }
    );
  }

  updateDetails() {
    this.onSubmit();
  }

  deleteAccount() {
    if (confirm('Are you sure you want to delete your account?')) {
      this.http.delete('/api/renter/delete').subscribe(
        response => {
          alert('Account deleted successfully');
          this.router.navigate(['/signup']);
        },
        error => {
          console.error('Error deleting account', error);
          alert('Failed to delete account');
        }
      );
    }
  }
}
