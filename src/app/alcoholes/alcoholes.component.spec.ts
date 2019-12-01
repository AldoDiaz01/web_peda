import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlcoholesComponent } from './alcoholes.component';

describe('AlcoholesComponent', () => {
  let component: AlcoholesComponent;
  let fixture: ComponentFixture<AlcoholesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlcoholesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlcoholesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
