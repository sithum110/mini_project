import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {

}
