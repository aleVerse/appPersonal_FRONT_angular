import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaTecnologia.ModalComponent } from './nueva-tecnologia.modal.component';

describe('NuevaTecnologia.ModalComponent', () => {
  let component: NuevaTecnologia.ModalComponent;
  let fixture: ComponentFixture<NuevaTecnologia.ModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaTecnologia.ModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaTecnologia.ModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
