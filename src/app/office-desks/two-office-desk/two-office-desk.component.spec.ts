/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwoOfficeDeskComponent } from './two-office-desk.component';

describe('TwoOfficeDeskComponent', () => {
  let component: TwoOfficeDeskComponent;
  let fixture: ComponentFixture<TwoOfficeDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoOfficeDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoOfficeDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
