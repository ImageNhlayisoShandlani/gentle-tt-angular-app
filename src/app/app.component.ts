import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { BookingFormComponent } from './pages/dialogs/booking-form/booking-form.component';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMailBulk,
  faPhone,
  faHamburger,
  faBars,
  faRectangleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private matDialog: MatDialog,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    console.log(this.activeRoute.url);
  }

  login() {
    this.router.navigate(['products-component']);
    let x = document.querySelector('ul') as HTMLElement;
    x.style.right = '-150%';
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }
  title = 'gentle-tt';
  phone = faPhone;
  facebook = faFacebook;
  twitter = faTwitter;
  insta = faInstagram;
  mail = faMailBulk;
  menu = faBars;
  close = faRectangleXmark;

  openDialog() {
    this.matDialog.open(BookingFormComponent, {});
    this.activeRoute.url.subscribe((event) => {
      console.log(event[0]); // It's an array remember [0]
      console.log(event[0].path); // e.g. /products
      console.log(event[0].parameters); // e.g. { id: 'x8klP0' }
    });
    let x = document.querySelector('ul') as HTMLElement;
    x.style.right = '-150%';
  }

  change() {
    let x = document.querySelector('ul') as HTMLElement;
    x.style.right = 'initial';
  }

  openes() {
    let x = document.querySelector('ul') as HTMLElement;
    x.style.right = '-150%';
    setTimeout(() => {
      window.location.reload();
    }, 50);
  }

  openSide() {
    console.log(2);
  }
  ngOnInit(): void {}

  huy() {
    console.log('scrolling');
    var cover = document.getElementById('huey') as HTMLElement;
    if (window.scrollY > 150) {
      document.getElementsByTagName('nav')[0].classList.add('onScrollNav');
      cover.classList.add('onScrollCover');
    } else {
      document.getElementsByTagName('nav')[0].classList.remove('onScrollNav');
      cover.classList.remove('onScrollCover');
    }
  }
  header_var = false;
  @HostListener('window:scroll', ['$event'])
  onScrollEvent() {
    // console.log($event['Window']);
    console.log('scrolling');
    var cover = document.getElementById('huey') as HTMLElement;
    if (window.scrollY > 150) {
      document.getElementsByTagName('nav')[0].classList.add('onScrollNav');
      cover.classList.add('onScrollCover');
    } else {
      document.getElementsByTagName('nav')[0].classList.remove('onScrollNav');
      cover.classList.remove('onScrollCover');
    }

    /*
    if (window.scrollY > 500) {
      const v = document.querySelector('.floating-btn') as HTMLElement;
      v.style.opacity = '1';
    } else {
      const v = document.querySelector('.floating-btn') as HTMLElement;
      v.style.opacity = '0';
    }
    */
  }
}
