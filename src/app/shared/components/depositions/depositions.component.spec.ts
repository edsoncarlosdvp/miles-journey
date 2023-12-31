import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositionsComponent } from './depositions.component';

describe('DepositionsComponent', () => {
  let component: DepositionsComponent;
  let fixture: ComponentFixture<DepositionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositionsComponent]
    });
    fixture = TestBed.createComponent(DepositionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
