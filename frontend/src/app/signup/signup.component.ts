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
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  role: string = '';
  

  constructor(private http: HttpClient,private router: Router) {}

  onSubmit() {
    const user = { username: this.username, email: this.email, password: this.password, role: this.role };
    this.http.post('http://localhost:3000/api/signup', user)
      .subscribe(response => {
        console.log('User signed up', response);
        this.router.navigate(['/login']);
      }, error => {
        console.error('Error signing up', error);
      });
  }
}

