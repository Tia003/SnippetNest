/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccediComponent } from './Accedi.component';

describe('AccediComponent', () => {
  let component: AccediComponent;
  let fixture: ComponentFixture<AccediComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccediComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
