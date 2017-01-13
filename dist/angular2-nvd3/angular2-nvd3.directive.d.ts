import { ElementRef, OnChanges, OnInit } from '@angular/core';
export declare class NvD3Directive implements OnChanges, OnInit {
    private el;
    options: any;
    data: any;
    private ngNvD3;
    constructor(el: ElementRef);
    ngOnChanges(): void;
    ngOnInit(): void;
}
