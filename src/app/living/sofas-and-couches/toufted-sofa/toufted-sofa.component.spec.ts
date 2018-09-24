/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TouftedSofaComponent } from './toufted-sofa.component';

describe('TouftedSofaComponent', () => {
  let component: TouftedSofaComponent;
  let fixture: ComponentFixture<TouftedSofaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TouftedSofaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TouftedSofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
