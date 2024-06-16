import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiburonFichaComponent } from './tiburon-ficha.component';

describe('TiburonFichaComponent', () => {
  let component: TiburonFichaComponent;
  let fixture: ComponentFixture<TiburonFichaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiburonFichaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiburonFichaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
