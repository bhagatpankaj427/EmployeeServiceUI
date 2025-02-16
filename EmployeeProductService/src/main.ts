import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { EmployeeComponent } from './app/employee/employee.component';
import { ProductComponent } from './app/product/product.component';
import { HomeComponent } from './app/home/home.component';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent }, // Default route
      { path: 'employee', component: EmployeeComponent },
      { path: 'product', component: ProductComponent },
      { path: '**', redirectTo: '' }, // Handle unknown routes
    ]),
  ],
}).catch(err => console.error(err));
