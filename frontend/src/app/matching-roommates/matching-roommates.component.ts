import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoommateService } from '../services/roommate.service';

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

  constructor(private roommateService: RoommateService) { }

  ngOnInit(): void {
    this.loadRoommates();
  }

  loadRoommates(): void {
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
}

