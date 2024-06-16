import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosCookiesPrivacidadComponent } from './terminos-cookies-privacidad.component';

describe('TerminosCookiesPrivacidadComponent', () => {
  let component: TerminosCookiesPrivacidadComponent;
  let fixture: ComponentFixture<TerminosCookiesPrivacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminosCookiesPrivacidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminosCookiesPrivacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
