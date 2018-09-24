/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CoirComponent } from './coir.component';

describe('CoirComponent', () => {
  let component: CoirComponent;
  let fixture: ComponentFixture<CoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
