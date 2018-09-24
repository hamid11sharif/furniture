/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SnozeTallComponent } from './snoze-tall.component';

describe('SnozeTallComponent', () => {
  let component: SnozeTallComponent;
  let fixture: ComponentFixture<SnozeTallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnozeTallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnozeTallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
