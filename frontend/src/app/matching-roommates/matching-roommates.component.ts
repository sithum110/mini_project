import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-matching-roommates',
  templateUrl: './matching-roommates.component.html',
  styleUrls: ['./matching-roommates.component.css'],
  imports:[CommonModule]
})
export class MatchingRoommatesComponent implements OnInit {
  roommates: any[] = [];
  isLoading = true;  // Loading state

  constructor() { }

  ngOnInit(): void {
    // Simulate data fetching with a timeout
    setTimeout(() => {
      this.roommates = [
        {
          name: 'kalana ',
          email: 'Kalana.doe@example.com',
          gender: 'Male',
          budget: 1000,
          location: 'Galle'
        },
        {
          name: 'sahan',
          email: 'sahan@example.com',
          gender: 'male',
          budget: 1200,
          location: 'Galle'
        },
        {
          name: 'nalini',
          email: 'nalini@example.com',
          gender: 'Female',
          budget: 900,
          location: 'Galle'
        }
      ];
      this.isLoading = false;  // Data is loaded
    }, 2000);  // Simulate a 2-second load time
  }
}
