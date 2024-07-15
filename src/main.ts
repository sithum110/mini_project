import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appRoutingProviders } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


bootstrapApplication(AppComponent, {
  providers: [
    appRoutingProviders,
    importProvidersFrom(HttpClientModule, FormsModule)
  ]
}).catch(err => console.error(err));