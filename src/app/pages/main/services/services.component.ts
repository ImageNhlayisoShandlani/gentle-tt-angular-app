import { Component } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faRectangleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMailBulk, faBars, faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  facebook = faFacebook;
  twitter = faTwitter;
  insta = faInstagram;
  mail = faMailBulk;
  menu = faBars;
  close = faRectangleXmark;
  check = faCheck;
}
