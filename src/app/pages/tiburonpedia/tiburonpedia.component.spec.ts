import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiburonpediaComponent } from './tiburonpedia.component';

describe('TiburonpediaComponent', () => {
  let component: TiburonpediaComponent;
  let fixture: ComponentFixture<TiburonpediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiburonpediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiburonpediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
