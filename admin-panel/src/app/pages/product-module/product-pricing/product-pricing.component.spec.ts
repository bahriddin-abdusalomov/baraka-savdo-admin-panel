import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPricingComponent } from './product-pricing.component';

describe('ProductPricingComponent', () => {
  let component: ProductPricingComponent;
  let fixture: ComponentFixture<ProductPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductPricingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
