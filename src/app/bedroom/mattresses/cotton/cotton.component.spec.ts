/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CottonComponent } from './cotton.component';

describe('CottonComponent', () => {
  let component: CottonComponent;
  let fixture: ComponentFixture<CottonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CottonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
