import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloFichaComponent } from './articulo-ficha.component';

describe('ArticuloFichaComponent', () => {
  let component: ArticuloFichaComponent;
  let fixture: ComponentFixture<ArticuloFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloFichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
