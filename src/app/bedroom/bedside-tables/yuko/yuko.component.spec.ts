/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YukoComponent } from './yuko.component';

describe('YukoComponent', () => {
  let component: YukoComponent;
  let fixture: ComponentFixture<YukoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YukoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YukoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
