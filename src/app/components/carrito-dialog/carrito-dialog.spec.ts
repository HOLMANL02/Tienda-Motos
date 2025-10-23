import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoDialog } from './carrito-dialog';

describe('CarritoDialog', () => {
  let component: CarritoDialog;
  let fixture: ComponentFixture<CarritoDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarritoDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
