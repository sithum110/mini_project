import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterLink, RouterLinkActive} from '@angular/router';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}
