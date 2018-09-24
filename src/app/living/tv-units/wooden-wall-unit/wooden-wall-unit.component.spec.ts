/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WoodenWallUnitComponent } from './wooden-wall-unit.component';

describe('WoodenWallUnitComponent', () => {
  let component: WoodenWallUnitComponent;
  let fixture: ComponentFixture<WoodenWallUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WoodenWallUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodenWallUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
