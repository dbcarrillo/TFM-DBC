import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiburonListaComponent } from './tiburon-lista.component';

describe('TiburonListaComponent', () => {
  let component: TiburonListaComponent;
  let fixture: ComponentFixture<TiburonListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiburonListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiburonListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
