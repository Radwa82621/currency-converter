import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertByDateComponent } from './convert-by-date.component';

describe('ConvertByDateComponent', () => {
  let component: ConvertByDateComponent;
  let fixture: ComponentFixture<ConvertByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertByDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
