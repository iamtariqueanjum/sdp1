import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Product12Component } from './product12.component';

describe('Product12Component', () => {
  let component: Product12Component;
  let fixture: ComponentFixture<Product12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
