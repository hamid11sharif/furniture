/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WestwoodComponent } from './westwood.component';

describe('WestwoodComponent', () => {
  let component: WestwoodComponent;
  let fixture: ComponentFixture<WestwoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WestwoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WestwoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
