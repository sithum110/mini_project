// import { Component } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-forum',
//   standalone: true,
//   imports: [HttpClientModule, FormsModule],
//   templateUrl: './forum.component.html',
//   styleUrl: './forum.component.css'
// })
// export class ForumComponent {
//   name: string = '';
//   email: string = '';
//   gender: string = '';
//   birthDate: string = '';
//   budget: number = 0;
//   location: string = '';
//   apartment: boolean = false;
//   house: boolean = false;
//   amenities: string = '';
//   lifestyle: string = '';
//   roommatePreferences: string = '';
//   quietEnvironment: string = '';
//   socialGatherings: string = '';
//   dietaryRestrictions: string = '';
//   petsInHouse: string = '';
//   birthDay: any;

//   constructor(private http: HttpClient,private router: Router) {}

//   onSubmit() {
//     const questionnaireData = {
//       name: this.name,
//       email: this.email,
//       gender: this.gender,
//       birthDate: this.birthDate,
//       budget: this.budget,
//       location: this.location,
//       apartment: this.apartment,
//       house: this.house,
//       amenities: this.amenities,
//       lifestyle: this.lifestyle,
//       roommatePreferences: this.roommatePreferences,
//       quietEnvironment: this.quietEnvironment,
//       socialGatherings: this.socialGatherings,
//       dietaryRestrictions: this.dietaryRestrictions,
//       petsInHouse: this.petsInHouse
//     };

//     this.http.post('http://localhost:3000/api/forum', questionnaireData)
//       .subscribe(response => {
//         console.log('Questionnaire submitted', response);
//         alert('Questionnaire submitted successfully!');
//         this.router.navigate(['./renter-account']);
//       }, error => {
//         console.error('Error submitting questionnaire', error);
//       });
//   }


// }


import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [HttpClientModule, FormsModule,],
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  userid: any = '';
  name: string = '';
  email: string = ''; // Ensure this is set correctly
  gender: string = '';
  birthDate: string = '';
  budget: number = 0;
  location: string = '';
  apartment: boolean = false;
  house: boolean = false;
  amenities: string = '';
  lifestyle: string = '';
  roommatePreferences: string = '';
  quietEnvironment: string = '';
  socialGatherings: string = '';
  dietaryRestrictions: string = '';
  petsInHouse: string = '';
  birthDay: any;


constructor(private http: HttpClient, private router: Router,private route: ActivatedRoute,private auth:AuthService) {}


  ngOnInit(): void {
    const user=localStorage.getItem('user');
    const rser = this.auth.getUser();
    console.log('User:', rser);
    this.userid = user;
    }
  
  

  onSubmit() {
    const questionnaireData = {
    userid: this.userid,
      name: this.name,
      email: this.email, // Include email in the data
      gender: this.gender,
      birthDate: this.birthDate,
      budget: this.budget,
      location: this.location,
      apartment: this.apartment,
      house: this.house,
      amenities: this.amenities,
      lifestyle: this.lifestyle,
      roommatePreferences: this.roommatePreferences,
      quietEnvironment: this.quietEnvironment,
      socialGatherings: this.socialGatherings,
      dietaryRestrictions: this.dietaryRestrictions,
      petsInHouse: this.petsInHouse
    };
    const ttoken = this.auth.getToken(); 
    const headers = new HttpHeaders({
      
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + ttoken, // Replace with your actual token or other headers
    });

    this.http.post('http://localhost:3000/api/forum', questionnaireData, { headers })
      .subscribe(response => {
        console.log('Questionnaire submitted', response);
        alert('Questionnaire submitted successfully!');

        // Store the email to localStorage or auth service if needed
        localStorage.setItem('userEmail', this.email);

        this.router.navigate(['/renter-account']);
      }, error => {
        console.error('Error submitting questionnaire', error);
      });
  }
}

