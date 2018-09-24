/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LightModernComponent } from './light-modern.component';

describe('LightModernComponent', () => {
  let component: LightModernComponent;
  let fixture: ComponentFixture<LightModernComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightModernComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
