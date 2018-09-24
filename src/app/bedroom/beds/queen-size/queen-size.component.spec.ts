/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueenSizeComponent } from './queen-size.component';

describe('QueenSizeComponent', () => {
  let component: QueenSizeComponent;
  let fixture: ComponentFixture<QueenSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueenSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueenSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
