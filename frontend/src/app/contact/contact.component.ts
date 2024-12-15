import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  number: string = '';
  subject: string = '';
  message: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    const contactData = {
      name: this.name,
      email: this.email,
      message: this.message,
      number: this.number,
      subject: this.subject
    };

    this.http.post('http://localhost:3000/api/contact', contactData)
      .subscribe(response => {
        console.log('Contact form submitted', response);
        alert('Contact form submitted successfully!');
      }, error => {
        console.error('Error submitting contact form', error);
      });
  }
}
