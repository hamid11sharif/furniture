/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QueenComponent } from './queen.component';

describe('QueenComponent', () => {
  let component: QueenComponent;
  let fixture: ComponentFixture<QueenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
