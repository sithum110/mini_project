import { Component } from '@angular/core';

@Component({
  selector: 'app-roommate-results',
  standalone: true,
  imports: [],
  templateUrl: './roommate-results.component.html',
  styleUrl: './roommate-results.component.css',
  
  template: `
    <h1>Matching Roommates</h1>
    <div *ngIf="data.roommates.length > 0">
      <div *ngFor="let roommate of data.roommates">
    
        <!-- Add more roommate details as necessary -->
        <hr>
      </div>
    </div>
    <div *ngIf="data.roommates.length === 0">
      <p>No matching roommates found.</p>
    </div>
  `,
})
export class RoommateResultsComponent {

  

}
