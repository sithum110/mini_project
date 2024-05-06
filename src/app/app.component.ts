import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RouterLink, RouterLinkActive} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { AgencyComponent } from './agency/agency.component'; 
import { AgentComponent } from './agent/agent.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { PropertyComponent } from './property/property.component'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,HomeComponent,AboutComponent,BlogComponent,AgencyComponent,AgentComponent,BlogDetailComponent,ContactComponent,DetailComponent,ListComponent,LoginComponent,PropertyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rrr';
}
