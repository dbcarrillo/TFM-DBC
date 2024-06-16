import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloEjemploComponent } from './articulo-ejemplo.component';

describe('ArticuloEjemploComponent', () => {
  let component: ArticuloEjemploComponent;
  let fixture: ComponentFixture<ArticuloEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloEjemploComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
