import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedToCartToastComponent } from './added-to-cart-toast.component';

describe('AddedToCartToastComponent', () => {
  let component: AddedToCartToastComponent;
  let fixture: ComponentFixture<AddedToCartToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddedToCartToastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddedToCartToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
