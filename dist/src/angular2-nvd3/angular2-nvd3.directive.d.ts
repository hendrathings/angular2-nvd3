import { ElementRef, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
export declare class NvD3Directive implements OnChanges, AfterViewInit, OnDestroy {
    private el;
    private options;
    private data;
    private chart;
    private svg;
    private isViewInitialize;
    constructor(el: ElementRef);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private updateWithOptions(options);
    private updateWithData(data);
    private configure(chart, options, chartType);
    private configureEvents(dispatch, options);
    private clearElement();
}
