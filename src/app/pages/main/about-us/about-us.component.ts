import { Component } from '@angular/core';
import {
  faAsterisk,
  faBuilding,
  faCalendar,
  faEyeSlash,
  faSmile,
  faStar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent {
  astr = faAsterisk;
  fa = faCalendar;
  smile = faSmile;
  user = faUser;
  building = faBuilding;
  eye = faEyeSlash;
  star = faStar;
}
