/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { KingSizeComponent } from './king-size.component';

describe('KingSizeComponent', () => {
  let component: KingSizeComponent;
  let fixture: ComponentFixture<KingSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KingSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KingSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
