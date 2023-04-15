import { Component } from '@angular/core';
import { FaConfig } from '@fortawesome/angular-fontawesome/config';
import {
  faCalendar,
  faSmile,
  faUser,
  faBuilding,
  faEyeSlash,
  faStar,
} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  fa = faCalendar;
  smile = faSmile;
  user = faUser;
  building = faBuilding;
  eye = faEyeSlash;
  star = faStar;
}
