import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoommateService } from '../services/roommate.service';
import { Router } from '@angular/router'; 

@Component({
  standalone: true,
  selector: 'app-matching-roommates',
  templateUrl: './matching-roommates.component.html',
  styleUrls: ['./matching-roommates.component.css'],
  imports: [CommonModule]
})
export class MatchingRoommatesComponent implements OnInit {
  roommates: any[] = [];
  isLoading = true;  // Loading state
  error: string | null = null; // Error handling

  constructor(private roommateService: RoommateService, private router: Router) { }

  ngOnInit(): void {
    this.loadRoommates();
  }

  loadRoommates(): void {

    console.log('Loading roommates...');
    this.roommateService.getMatchingRoommates().subscribe(
      data => {
        this.roommates = data;
        this.isLoading = false;  // Data is loaded
      },
      error => {
        console.error('Error fetching roommates:', error);
        this.error = 'Error fetching roommates'; // Set error message
        this.isLoading = false;  // Data loading is complete even in case of error
      }
    );
  }
  sendMessage(roommate: any): void {
    // Implement your message sending logic here
    console.log('Send message to:', roommate);
    // Example: open a messaging modal, redirect to a messaging page, etc.
  }

  navigateToAccount(): void {
    this.router.navigate(['/renter-account']); // Adjust the route to your account page
  }
  
}


