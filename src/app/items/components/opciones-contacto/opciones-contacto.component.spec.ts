import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionesContactoComponent } from './opciones-contacto.component';

describe('OpcionesContactoComponent', () => {
  let component: OpcionesContactoComponent;
  let fixture: ComponentFixture<OpcionesContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpcionesContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpcionesContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
