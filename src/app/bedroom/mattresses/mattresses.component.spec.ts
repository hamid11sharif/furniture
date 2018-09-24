/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MattressesComponent } from './mattresses.component';

describe('MattressesComponent', () => {
  let component: MattressesComponent;
  let fixture: ComponentFixture<MattressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
