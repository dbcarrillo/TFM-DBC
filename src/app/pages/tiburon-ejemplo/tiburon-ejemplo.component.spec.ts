import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiburonEjemploComponent } from './tiburon-ejemplo.component';

describe('TiburonEjemploComponent', () => {
  let component: TiburonEjemploComponent;
  let fixture: ComponentFixture<TiburonEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiburonEjemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiburonEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
