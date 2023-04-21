import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/main/contact/contact.component';
import { HomeComponent } from '../app/pages/main/home/home.component';
import { LoginComponent } from './pages/main/login/login.component';
import { ServicesComponent } from './pages/main/services/services.component';
import { ProductsComponent } from './pages/main/products/products.component';
import { AboutUsComponent } from './pages/main/about-us/about-us.component';
import { RegisterComponent } from './pages/main/register/register.component';
import { CartComponent } from './pages/main/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'home-component',
    component: HomeComponent,
  },
  {
    path: 'contact-component',
    component: ContactComponent,
  },
  {
    path: 'login-component',
    component: LoginComponent,
  },
  {
    path: 'services-component',
    component: ServicesComponent,
  },
  {
    path: 'products-component',
    component: ProductsComponent,
  },
  {
    path: 'about-component',
    component: AboutUsComponent,
  },
  {
    path: 'register-component',
    component: RegisterComponent,
  },
  {
    path: 'cart-component',
    component: CartComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
