/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccentShelfComponent } from './accent-shelf.component';

describe('AccentShelfComponent', () => {
  let component: AccentShelfComponent;
  let fixture: ComponentFixture<AccentShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccentShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccentShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
