import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {ToastrModule} from 'ngx-toastr'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { NavbarComponent } from './navbar/navbar.component';;
import { HeaderComponent } from './header/header.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { MaskDirective } from './directives/mask.directive';
import { LoginPageComponent } from './login-page/login-page.component';
import { FramePageComponent } from './frame-page/frame-page.component';
import { CustumerPageComponent } from './custumer-page/custumer-page.component';
import { AuthService } from './services/auth.service';
import { SignupPageComponent } from './signup-page/signup-page.component';


@NgModule({
  declarations: [									
    AppComponent,
      ProductsPageComponent,
      NavbarComponent,
      ProductsPageComponent,
      HeaderComponent,
      DashboardPageComponent,
      OrdersPageComponent,
      MaskDirective,
      LoginPageComponent,
      FramePageComponent,
      CustumerPageComponent,
      SignupPageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
    
  ],
  providers: [DataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
