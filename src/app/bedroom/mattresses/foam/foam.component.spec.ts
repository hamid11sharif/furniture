/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FoamComponent } from './foam.component';

describe('FoamComponent', () => {
  let component: FoamComponent;
  let fixture: ComponentFixture<FoamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
