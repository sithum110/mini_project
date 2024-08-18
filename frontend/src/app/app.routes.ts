import { Routes } from '@angular/router';
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
import { SignupComponent } from './signup/signup.component';
import { provideRouter } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RentersComponent} from './renters/renters.component';
import { ForumComponent } from './forum/forum.component';
import { RenterAccountComponent } from './renter-account/renter-account.component';
import { UserService } from './services/user.service';


export const routes: Routes = [
{path:'' ,component:HomeComponent,title:'home apge' },
{path:'about' ,component:AboutComponent,title:'about page' },
{path:'blog' ,component:BlogComponent,title:'blog page' },
{path:'agency' ,component:AgencyComponent,title:'agency page' },
{path:'agent' ,component:AgentComponent,title:'agent page' },
{path:'blog-detail' ,component:BlogDetailComponent,title:'blog-detail page' },
{path:'contact' ,component:ContactComponent,title:'contact page' },
{path:'detail' ,component:DetailComponent,title:'detail page' },
{path:'list' ,component:ListComponent,title:'list page' },
{path:'login' ,component:LoginComponent,title:'login page' },
{path:'property' ,component:PropertyComponent,title:'property page' },
{ path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'signup', component: SignupComponent,title:'signup page'},
  {path:'Navbar' ,component:NavbarComponent,title:'navbar page' },
{path:'footer' ,component:FooterComponent,title:'footer page' },
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{path:'home' ,component:HomeComponent,title:'home apge' },
{path:'renters' ,component:RentersComponent,title:'renters page' },
{path:'forum' ,component:ForumComponent,title:'forum page' },
{path:'renter-account' ,component:RenterAccountComponent,title:'renter-account page' },


  
 
];
export const appRoutingProviders = [
    provideRouter(routes)
  ];
