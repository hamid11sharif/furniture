/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParsonsGrayComponent } from './parsons-gray.component';

describe('ParsonsGrayComponent', () => {
  let component: ParsonsGrayComponent;
  let fixture: ComponentFixture<ParsonsGrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParsonsGrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParsonsGrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
