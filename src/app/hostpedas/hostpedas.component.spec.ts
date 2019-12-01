import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostPedasComponent } from './hostpedas.component';

describe('HostPedasComponent', () => {
  let component: HostPedasComponent;
  let fixture: ComponentFixture<HostPedasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostPedasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostPedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
