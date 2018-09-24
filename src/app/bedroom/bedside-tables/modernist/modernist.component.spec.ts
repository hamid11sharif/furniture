/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ModernistComponent } from './modernist.component';

describe('ModernistComponent', () => {
  let component: ModernistComponent;
  let fixture: ComponentFixture<ModernistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
