/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LedelleComponent } from './ledelle.component';

describe('LedelleComponent', () => {
  let component: LedelleComponent;
  let fixture: ComponentFixture<LedelleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LedelleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LedelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
