import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = '';

  onEditEmail (event: Event) {
    console.log('Email changed to:', (event.target as HTMLInputElement).value);
    this.email = (event.target as HTMLInputElement).value;
  }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.message = 'Passwords do not match!';
      return;
    }
    console.log('Signing up user...');

    const user = { fullName: this.fullName, email: this.email, password: this.password };

    console.log(user);

    fetch('http://localhost:3000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
      this.message = data.message;
    })
    .catch(error => {
      this.message = 'Error signing up user.';
      console.error('Error:', error);
    });
  }
}
