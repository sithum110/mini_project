import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterLink, RouterLinkActive} from '@angular/router';


@Component({
  selector: 'app-renters',
  standalone: true,
  imports: [ RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './renters.component.html',
  styleUrl: './renters.component.css'
})
export class RentersComponent {

}
