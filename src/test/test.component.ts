import { Component, DebugElement } from '@angular/core';

@Component({ template: `<div appNvD3 [options]="options" [data]="data"></div>` })
/** experimanetalDecorator */
export class TestComponent {
  public options: any;
  public data: any;
}
