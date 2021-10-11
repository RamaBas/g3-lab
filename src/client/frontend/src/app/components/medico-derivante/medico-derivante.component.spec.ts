import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoDerivanteComponent } from './medico-derivante.component';

describe('MedicoDerivanteComponent', () => {
  let component: MedicoDerivanteComponent;
  let fixture: ComponentFixture<MedicoDerivanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoDerivanteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoDerivanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
