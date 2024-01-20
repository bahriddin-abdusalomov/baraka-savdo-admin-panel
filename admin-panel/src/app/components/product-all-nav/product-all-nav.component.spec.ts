import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAllNavComponent } from './product-all-nav.component';

describe('ProductAllNavComponent', () => {
  let component: ProductAllNavComponent;
  let fixture: ComponentFixture<ProductAllNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductAllNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductAllNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
