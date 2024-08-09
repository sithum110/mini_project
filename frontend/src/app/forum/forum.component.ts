import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent {
  name: string = '';
  email: string = '';
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

  constructor(private http: HttpClient,private router: Router) {}

  onSubmit() {
    const questionnaireData = {
      name: this.name,
      email: this.email,
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

    this.http.post('http://localhost:3000/api/forum', questionnaireData)
      .subscribe(response => {
        console.log('Questionnaire submitted', response);
        alert('Questionnaire submitted successfully!');
      }, error => {
        console.error('Error submitting questionnaire', error);
      });
  }


}
