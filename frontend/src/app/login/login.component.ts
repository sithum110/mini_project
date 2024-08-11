import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('User logged in', response);
        alert('Login successful!');
        
        const userRole = response.role;

        if(userRole === 'owner'){
          this.router.navigate(['/owner']);
        } else if(userRole === 'renter'){
          this.router.navigate(['/renter']);
        }else {
          this.router.navigate(['/home']);
        }
      },
      error => {
        console.error('Error logging in', error);
        alert('user not found');
      }
    );
  }
}

