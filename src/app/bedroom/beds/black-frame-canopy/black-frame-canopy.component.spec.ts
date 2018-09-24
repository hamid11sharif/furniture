/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlackFrameCanopyComponent } from './black-frame-canopy.component';

describe('BlackFrameCanopyComponent', () => {
  let component: BlackFrameCanopyComponent;
  let fixture: ComponentFixture<BlackFrameCanopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackFrameCanopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackFrameCanopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
