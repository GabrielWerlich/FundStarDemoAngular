import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { FramePageComponent } from './frame-page/frame-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { AuthService } from './services/auth.service';
import { SignupPageComponent } from './signup-page/signup-page.component';


const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    canActivate: [AuthService],
    children: [
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'products', component: ProductsPageComponent },
      { path: 'orders', component: OrdersPageComponent }
    ]
  },

  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupPageComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
