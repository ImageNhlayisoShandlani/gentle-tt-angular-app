import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private router: Router) {}
  star = faStar;

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  @HostListener('click', ['$event'])
  onClick() {
    document
      .querySelector('.button-product button')
      ?.addEventListener('click', () => {
        window.alert('Added to Cart');
      });
  }
}
