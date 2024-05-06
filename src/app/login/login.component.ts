import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
