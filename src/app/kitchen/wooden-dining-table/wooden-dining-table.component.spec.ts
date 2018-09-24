/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WoodenDiningTableComponent } from './wooden-dining-table.component';

describe('WoodenDiningTableComponent', () => {
  let component: WoodenDiningTableComponent;
  let fixture: ComponentFixture<WoodenDiningTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodenDiningTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodenDiningTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
