/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookCaseWoodComponent } from './book-case-wood.component';

describe('BookCaseWoodComponent', () => {
  let component: BookCaseWoodComponent;
  let fixture: ComponentFixture<BookCaseWoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookCaseWoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCaseWoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
