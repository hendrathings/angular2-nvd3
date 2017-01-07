import { ElementRef, OnChanges, AfterViewInit } from '@angular/core';
export declare class NvD3Component implements OnChanges, AfterViewInit {
    private el;
    private options;
    private data;
    private ngNvD3;
    constructor(el: ElementRef);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
}
