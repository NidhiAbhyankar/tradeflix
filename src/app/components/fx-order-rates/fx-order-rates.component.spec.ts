import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxOrderRatesComponent } from './fx-order-rates.component';

describe('FxOrderRatesComponent', () => {
  let component: FxOrderRatesComponent;
  let fixture: ComponentFixture<FxOrderRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxOrderRatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxOrderRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
