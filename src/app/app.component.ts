import {
  Component,
  OnInit,
  HostListener,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gentle-tt';

  change() {
    const h = document.getElementById('hom') as HTMLElement;
    h.classList.add('me');
  }
  ngOnInit(): void {}

  header_var = false;
  @HostListener('window:scroll', ['$event'])
  onScrollEven() {
    // console.log($event['Window']);
    console.log('scrolling');

    if (window.scrollY > 250) {
      this.header_var = true;
    } else {
      this.header_var = false;
    }

    if (window.scrollY > 500) {
      const v = document.querySelector('.floating-btn') as HTMLElement;
      v.style.opacity = '1';
    } else {
      const v = document.querySelector('.floating-btn') as HTMLElement;
      v.style.opacity = '0';
    }
  }
}
