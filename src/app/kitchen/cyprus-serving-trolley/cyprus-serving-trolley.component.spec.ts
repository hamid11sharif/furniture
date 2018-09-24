/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CyprusServingTrolleyComponent } from './cyprus-serving-trolley.component';

describe('CyprusServingTrolleyComponent', () => {
  let component: CyprusServingTrolleyComponent;
  let fixture: ComponentFixture<CyprusServingTrolleyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyprusServingTrolleyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyprusServingTrolleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
