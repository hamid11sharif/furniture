/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SudanOfficeDeskComponent } from './sudan-office-desk.component';

describe('SudanOfficeDeskComponent', () => {
  let component: SudanOfficeDeskComponent;
  let fixture: ComponentFixture<SudanOfficeDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SudanOfficeDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SudanOfficeDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
