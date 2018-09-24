/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoamMatt1Component } from './foam-matt-1.component';

describe('FoamMatt1Component', () => {
  let component: FoamMatt1Component;
  let fixture: ComponentFixture<FoamMatt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoamMatt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoamMatt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
