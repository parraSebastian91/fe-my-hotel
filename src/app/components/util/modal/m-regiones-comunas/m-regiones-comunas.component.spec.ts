import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MRegionesComunasComponent } from './m-regiones-comunas.component';

describe('MRegionesComunasComponent', () => {
  let component: MRegionesComunasComponent;
  let fixture: ComponentFixture<MRegionesComunasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MRegionesComunasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MRegionesComunasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
