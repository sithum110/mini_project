import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service'; // Adjust the path as needed
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoommateService } from '../services/roommate.service';
import { RouterLink,RouterLinkActive } from '@angular/router';



@Component({
  standalone: true,
  selector: 'app-renter-account',
  templateUrl: './renter-account.component.html',
  styleUrls: ['./renter-account.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink,RouterLinkActive ]
  
})
export class RenterAccountComponent implements OnInit {
  forumDetails: any;
  forumId = '66c2e99e16f8383d08e90f37'; // Replace with the actual forum ID you want to fetch

  constructor(private forumService: ForumService, private roommatservice:RoommateService) {}

  ngOnInit(): void {
    this.loadForumDetails();
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






