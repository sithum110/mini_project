import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
