import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedasComponent } from './pedas.component';

describe('PedasComponent', () => {
  let component: PedasComponent;
  let fixture: ComponentFixture<PedasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
