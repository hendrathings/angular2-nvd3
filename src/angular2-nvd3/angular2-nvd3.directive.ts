import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { Angular2NvD3 } from './angular2-nvd3.core';

@Directive({ selector: '[appNvD3]' })
export class NvD3Directive implements OnChanges, OnInit {
    @Input()
    public options: any;

    @Input()
    public data: any;

    private ngNvD3: any;

    constructor(private el: ElementRef) {
        this.ngNvD3 = new Angular2NvD3.NgNvD3(this.el);
    }

    ngOnChanges(changes?) {
        this.ngNvD3.updateWithOptions(this.options, this.data);
    }

    ngOnInit() {
        this.ngNvD3.isViewInitialize(true);
        this.ngNvD3.updateWithOptions(this.options, this.data);
    }
}
