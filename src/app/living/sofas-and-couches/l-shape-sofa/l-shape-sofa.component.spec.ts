/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LShapeSofaComponent } from './l-shape-sofa.component';

describe('LShapeSofaComponent', () => {
  let component: LShapeSofaComponent;
  let fixture: ComponentFixture<LShapeSofaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LShapeSofaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LShapeSofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
