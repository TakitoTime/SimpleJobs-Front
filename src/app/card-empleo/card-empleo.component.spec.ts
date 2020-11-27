import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmpleoComponent } from './card-empleo.component';

describe('CardEmpleoComponent', () => {
  let component: CardEmpleoComponent;
  let fixture: ComponentFixture<CardEmpleoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardEmpleoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEmpleoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
