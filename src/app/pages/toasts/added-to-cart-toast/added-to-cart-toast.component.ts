import { Component } from '@angular/core';

@Component({
  selector: 'app-added-to-cart-toast',
  templateUrl: './added-to-cart-toast.component.html',
  styleUrls: ['./added-to-cart-toast.component.scss'],
})
export class AddedToCartToastComponent {
  position = 'top-end';
  visible = false;
  percentage = 0;

  toggleToast() {
    this.visible = !this.visible;
  }

  onVisibleChange($event: boolean) {
    this.visible = $event;
    this.percentage = !this.visible ? 0 : this.percentage;
  }

  onTimerChange($event: number) {
    this.percentage = $event * 25;
  }
}
