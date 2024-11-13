import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service'; // Adjust the path as needed
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../services/auth.service';


@Component({
  standalone: true,
  selector: 'app-renter-account',
  templateUrl: './renter-account.component.html',
  styleUrls: ['./renter-account.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule]
  
})
export class RenterAccountComponent implements OnInit {
  forumDetails: any;
  forumId = '66c9a8fe462f02c1078b550b'; // Replace with the actual forum ID you want to fetch

  constructor(private forumService: ForumService) {}

  ngOnInit(): void {
    this.loadForumDetails();
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('forumId');
     
  }

  loadForumDetails(): void {
    this.forumService.getForumDetails(this.forumId).subscribe(
      data => {
        this.forumDetails = data;
        console.log('Forum details loaded:', this.forumDetails);
      },
      error => {
        console.error('Error loading forum details:', error);
      }
    );
  }
}





// import { Component, OnInit } from '@angular/core';
// import { ForumService } from '../services/forum.service'; // Adjust the path as needed
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// @Component({
//   standalone: true,
//   selector: 'app-renter-account',
//   templateUrl: './renter-account.component.html',
//   styleUrls: ['./renter-account.component.css'],
//   imports: [CommonModule, FormsModule, HttpClientModule]
// })
// export class RenterAccountComponent implements OnInit {
//   forumDetails: any;
//   forumId!: string; // Use the definite assignment assertion

//   constructor(private forumService: ForumService) {}

//   ngOnInit(): void {
//     this.forumId = this.getCurrentRenterForumId();
//     if (this.forumId) {
//       this.loadForumDetails();
//     } else {
//       console.error('Forum ID not found.');
//     }
//   }

//   getCurrentRenterForumId(): string {
//     console.log(localStorage.getItem('forumId'));
//     console.log('hiii');

//     // Example: Retrieve the forum ID from localStorage or a service
//     return localStorage.getItem('forumId') || ''; // Adjust the key as needed
//   }

//   loadForumDetails(): void {
//     this.forumService.getForumDetails(this.forumId).subscribe(
//       data => {
//         this.forumDetails = data;
//         console.log('Forum details loaded:', this.forumDetails);
//       },
//       error => {
//         console.error('Error loading forum details:', error);
//       }
//     );
//   }
// }




