import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

}
