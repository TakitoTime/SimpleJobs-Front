import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleosDetallesComponent } from './empleos-detalles.component';

describe('EmpleosDetallesComponent', () => {
  let component: EmpleosDetallesComponent;
  let fixture: ComponentFixture<EmpleosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleosDetallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
