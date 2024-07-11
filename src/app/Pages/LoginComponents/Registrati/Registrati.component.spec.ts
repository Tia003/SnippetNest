/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RegistratiComponent } from './Registrati.component';

describe('RegistratiComponent', () => {
  let component: RegistratiComponent;
  let fixture: ComponentFixture<RegistratiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistratiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistratiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
