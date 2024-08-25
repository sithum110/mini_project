// import { Component, OnInit } from '@angular/core';
// import { ForumService } from '../services/forum.service'; // Adjust the path as needed
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { RoommateService } from '../services/roommate.service';
// import { RouterLink,RouterLinkActive } from '@angular/router';
// // import { Router } from '@angular/router';



// @Component({
//   standalone: true,
//   selector: 'app-renter-account',
//   templateUrl: './renter-account.component.html',
//   styleUrls: ['./renter-account.component.css'],
//   imports: [CommonModule, FormsModule, HttpClientModule, RouterLink,RouterLinkActive ]
  
// })
// export class RenterAccountComponent implements OnInit {
//   forumDetails: any;
//   forumId = '66c2e99e16f8383d08e90f37'; // Replace with the actual forum ID you want to fetch
 

//   constructor(private forumService: ForumService, private roommatservice:RoommateService) {}

//   ngOnInit(): void {
//     this.loadForumDetails();
//   }
//   logout(): void {
//     console.log('logout')
//     localStorage.removeItem('token');
//     // this.router.navigate(['/home']);
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



import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service'; // Adjust the path as needed
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RoommateService } from '../services/roommate.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-renter-account',
  templateUrl: './renter-account.component.html',
  styleUrls: ['./renter-account.component.css'],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterLink, RouterLinkActive]
})
export class RenterAccountComponent implements OnInit {
  forumDetails: any;
  forumId = '66c9add1462f02c1078b5515'; // Replace with the actual forum ID you want to fetch

  constructor(private forumService: ForumService, private roommatservice: RoommateService, private router: Router) {}

  ngOnInit(): void {
    
    this.loadForumDetails();
   
  }

  logout(): void {
    console.log('logout');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']); // Navigate to the login page
  }

  loadForumDetails(): void {
    console.log(this.forumId)
    const user=localStorage.getItem('user');
    console.log('user',user); 
    if(user){
      console.log('user',user);
      this.forumService.getForumDetails(user).subscribe(
        data => {
          this.forumDetails = data;
          console.log('Forum details loaded:', this.forumDetails);
        },
        error => {
          console.error('Error loading forum details:', error);
        }
      );
    }
    else{
      console.log('user not found');
    }
   
  }

  getUser()  {
    const user=localStorage.getItem('user');
    console.log(user)
  }
 
}








