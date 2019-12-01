import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioPedasComponent } from './usuariopedas.component';

describe('UsusarioPedasComponent', () => {
  let component: UsuarioPedasComponent;
  let fixture: ComponentFixture<UsuarioPedasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPedasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioPedasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
