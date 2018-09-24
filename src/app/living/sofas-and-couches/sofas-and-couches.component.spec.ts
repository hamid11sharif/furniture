/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SofasAndCouchesComponent } from './sofas-and-couches.component';

describe('SofasAndCouchesComponent', () => {
  let component: SofasAndCouchesComponent;
  let fixture: ComponentFixture<SofasAndCouchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SofasAndCouchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SofasAndCouchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
