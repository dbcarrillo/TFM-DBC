import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomarAccionComponent } from './tomar-accion.component';

describe('TomarAccionComponent', () => {
  let component: TomarAccionComponent;
  let fixture: ComponentFixture<TomarAccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomarAccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TomarAccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
