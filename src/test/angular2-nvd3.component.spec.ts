import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }                        from '@angular/platform-browser';
import { DebugElement }              from '@angular/core';
import { NvD3Component }             from '../angular2-nvd3/angular2-nvd3.component';

describe('tasks:NvD3Component', () => {

  let comp:    NvD3Component;
  let fixture: ComponentFixture<NvD3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NvD3Component ], // declare the test component
    });

    // fixture = TestBed.createComponent(NvD3Component);

    // comp = fixture.componentInstance; // NvD3Component test instance
  });

  it('should call ngOnChanges', () => {
    // fixture.detectChanges();
    // expect(comp.ngOnChanges).toHaveBeenCalled();
  });

  it('should call ngOnInit', () => {
    // fixture.detectChanges();
    // expect(comp.ngOnInit).toHaveBeenCalled();
  });

});