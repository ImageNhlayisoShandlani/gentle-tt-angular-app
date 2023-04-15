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

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactComponent, LoginComponent, ServicesComponent, ProductsComponent, AboutUsComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
