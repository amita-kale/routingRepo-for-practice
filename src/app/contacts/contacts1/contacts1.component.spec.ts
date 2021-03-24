import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contacts1Component } from './contacts1.component';

describe('Contacts1Component', () => {
  let component: Contacts1Component;
  let fixture: ComponentFixture<Contacts1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contacts1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacts1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
