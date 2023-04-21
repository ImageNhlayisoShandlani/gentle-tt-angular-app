import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/main/home/home.component';
import { RouterModule, Routes } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactComponent } from './pages/main/contact/contact.component';
import { LoginComponent } from './pages/main/login/login.component';
import { ServicesComponent } from './pages/main/services/services.component';
import { ProductsComponent } from './pages/main/products/products.component';
import { AboutUsComponent } from './pages/main/about-us/about-us.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingFormComponent } from './pages/dialogs/booking-form/booking-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { RegisterComponent } from './pages/main/register/register.component';
import { CartComponent } from './pages/main/cart/cart.component';
import { AddedToCartToastComponent } from './pages/toasts/added-to-cart-toast/added-to-cart-toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    ServicesComponent,
    ProductsComponent,
    AboutUsComponent,
    BookingFormComponent,
    RegisterComponent,
    CartComponent,
    AddedToCartToastComponent,
  ],
  imports: [
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
