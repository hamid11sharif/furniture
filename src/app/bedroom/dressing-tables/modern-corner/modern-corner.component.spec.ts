/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModernCornerComponent } from './modern-corner.component';

describe('ModernCornerComponent', () => {
  let component: ModernCornerComponent;
  let fixture: ComponentFixture<ModernCornerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernCornerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
