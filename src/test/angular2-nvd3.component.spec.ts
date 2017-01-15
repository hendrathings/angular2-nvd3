import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NvD3Component } from '../angular2-nvd3/angular2-nvd3.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { SampleData } from './sample-data';

SampleData.chartTypes.forEach((type) => {

  describe(`tasks:NvD3Component ${type}`, () => {

    let component: NvD3Component;
    let fixture: ComponentFixture<NvD3Component>;
    let componentElement: Element;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [NvD3Component], // declare the test component
      });

      fixture = TestBed.createComponent(NvD3Component);
      component = fixture.componentInstance; // NvD3Component test instance

      // pretend that it was wired to something
      component.options = SampleData.allOptions[type];
      component.data = SampleData.allData[type];
      // trigger initial data binding
      fixture.detectChanges();

      componentElement = fixture.nativeElement;
    });

    it(`should have svg`, () => {
      expect(componentElement.querySelectorAll('svg').length).toBe(1);
    });

    it('should svg have class nvd3-svg', () => {
      let gElement = componentElement.querySelector('svg');
      expect(gElement.classList).toContain('nvd3-svg');
    });

    it(`should g have class nv-${type}`, () => {
      let gElement = componentElement.querySelector('g');
      expect(gElement.className.baseVal).toContain(SampleData.chartClassExpected[type]);
    });
  });

});