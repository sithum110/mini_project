import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-roomer',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './roomer.component.html',
  styleUrl: './roomer.component.css'
})
export class RoomerComponent {

}
