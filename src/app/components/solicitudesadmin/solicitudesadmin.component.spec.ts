import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudesadminComponent } from './solicitudesadmin.component';

describe('SolicitudesadminComponent', () => {
  let component: SolicitudesadminComponent;
  let fixture: ComponentFixture<SolicitudesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudesadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitudesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
