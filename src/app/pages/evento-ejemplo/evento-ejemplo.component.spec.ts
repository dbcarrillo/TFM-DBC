import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoEjemploComponent } from './evento-ejemplo.component';

describe('EventoEjemploComponent', () => {
  let component: EventoEjemploComponent;
  let fixture: ComponentFixture<EventoEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoEjemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
