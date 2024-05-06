import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})
export class PropertyComponent {

}
