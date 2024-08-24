import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [HttpClientModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

  // Add other fields as necessary

export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  role: string = '';


  

  constructor(private http: HttpClient,private router: Router) {}

  onSubmit() {
    const user = { username: this.username, email: this.email, password: this.password, role: this.role };
    
    this.http.post('http://localhost:3000/api/signup', user)
      .subscribe((response:any) => {
        localStorage.setItem('user', (response['user']));
        localStorage.setItem('token', (response['token']));
        
        console.log('User signed up', response);
        if (this.role === 'renter') {
          // If the user is a renter, redirect them to the preferences form
          console.log('User is a renter',response);

          this.router.navigate(['/forum'], { state: { user: response['user'] } });
        } else {
          // Otherwise, redirect to login
          this.router.navigate(['/login']);
        }
      }, error => {
        console.error('Error signing up', error);
      });
  }
}

