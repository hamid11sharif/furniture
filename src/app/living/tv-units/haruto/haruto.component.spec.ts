/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HarutoComponent } from './haruto.component';

describe('HarutoComponent', () => {
  let component: HarutoComponent;
  let fixture: ComponentFixture<HarutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HarutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
