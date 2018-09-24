/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LoveSeatComponent } from './love-seat.component';

describe('LoveSeatComponent', () => {
  let component: LoveSeatComponent;
  let fixture: ComponentFixture<LoveSeatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoveSeatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoveSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
