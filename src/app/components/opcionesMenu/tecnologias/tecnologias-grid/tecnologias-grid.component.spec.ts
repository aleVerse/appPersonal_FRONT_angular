import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnologiasGridComponent } from './tecnologias-grid.component';

describe('TecnologiasGridComponent', () => {
  let component: TecnologiasGridComponent;
  let fixture: ComponentFixture<TecnologiasGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TecnologiasGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TecnologiasGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
