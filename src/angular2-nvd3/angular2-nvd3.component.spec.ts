import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }                        from '@angular/platform-browser';
import { DebugElement }              from '@angular/core';
import { NvD3Component }             from './angular2-nvd3.component';

describe('tasks:NvD3Component', () => {

  let comp:    NvD3Component;
  let fixture: ComponentFixture<NvD3Component>;
  let de:      DebugElement;
  let el:      HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ NvD3Component ], // declare the test component
    });

    fixture = TestBed.createComponent(NvD3Component);

    comp = fixture.componentInstance; // NvD3Component test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('app-nvd3'));
    el = de.nativeElement;
  });

  it('should call ngOnChanges', () => {
    fixture.detectChanges();
    expect(comp.ngOnChanges).toHaveBeenCalled();
  });

  it('should call ngAfterViewInit', () => {
    fixture.detectChanges();
    expect(comp.ngAfterViewInit).toHaveBeenCalled();
  });

});