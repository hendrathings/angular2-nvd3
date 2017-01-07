import { Component, ElementRef, Input, OnChanges, AfterViewInit } from '@angular/core';
import { Angular2NvD3 } from './angular2-nvd3.core';

@Component({ selector: 'app-nvd3', template: '' })
export class NvD3Component implements OnChanges, AfterViewInit {
    @Input()
    private options: any;

    @Input()
    private data: any;

    private ngNvD3: any;

    constructor(private el: ElementRef) {
        this.ngNvD3 = Angular2NvD3.NgNvD3.getInstance(this.el, this.data, this.options);
    }

    ngOnChanges() {
        this.ngNvD3.updateWithOptions();
    }

    ngAfterViewInit() {
        this.ngNvD3.isViewInitialize(true);
        this.ngNvD3.updateWithOptions();
    }
}
