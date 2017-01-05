import { ElementRef, OnChanges } from '@angular/core';
export declare class NvD3Component implements OnChanges {
    private options;
    private data;
    el: any;
    chart: any;
    svg: any;
    private isViewInitialize;
    constructor(elementRef: ElementRef);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private updateWithOptions(options);
    private updateWithData(data);
    private configure(chart, options, chartType);
    private configureEvents(dispatch, options);
    private clearElement();
}
