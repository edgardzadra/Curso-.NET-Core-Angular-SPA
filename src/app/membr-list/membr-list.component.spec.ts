/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MembrListComponent } from './membr-list.component';

describe('MembrListComponent', () => {
  let component: MembrListComponent;
  let fixture: ComponentFixture<MembrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
