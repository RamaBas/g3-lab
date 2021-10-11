import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaMedicoDerivanteComponent } from './alta-medico-derivante.component';

describe('AltaMedicoDerivanteComponent', () => {
  let component: AltaMedicoDerivanteComponent;
  let fixture: ComponentFixture<AltaMedicoDerivanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaMedicoDerivanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaMedicoDerivanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
