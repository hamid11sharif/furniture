/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BorgheseSofaComponent } from './borghese-sofa.component';

describe('BorgheseSofaComponent', () => {
  let component: BorgheseSofaComponent;
  let fixture: ComponentFixture<BorgheseSofaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorgheseSofaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorgheseSofaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
