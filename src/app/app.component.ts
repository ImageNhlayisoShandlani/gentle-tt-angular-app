import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gentle-tt';
  phone = faPhone;
  facebook = faFacebook;
  twitter = faTwitter;
  insta = faInstagram;
  mail = faMailBulk;
  menu = faBars;
  close = faRectangleXmark;

  change() {
    let x = document.querySelector('ul') as HTMLElement;
    x.style.right = 'initial';
  }

  openes() {
    let x = document.querySelector('ul') as HTMLElement;
    x.style.right = '-150%';
  }

  openSide() {
    console.log(2);
  }
  ngOnInit(): void {}

  header_var = false;
  @HostListener('window:scroll', ['$event'])
  onScrollEven() {
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
