import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGetComponent } from './the-get.component';

describe('TheGetComponent', () => {
  let component: TheGetComponent;
  let fixture: ComponentFixture<TheGetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheGetComponent]
    });
    fixture = TestBed.createComponent(TheGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
