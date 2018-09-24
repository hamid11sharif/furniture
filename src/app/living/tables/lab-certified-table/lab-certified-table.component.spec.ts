/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LabCertifiedTableComponent } from './lab-certified-table.component';

describe('LabCertifiedTableComponent', () => {
  let component: LabCertifiedTableComponent;
  let fixture: ComponentFixture<LabCertifiedTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabCertifiedTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabCertifiedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
