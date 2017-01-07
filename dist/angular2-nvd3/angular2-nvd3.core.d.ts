export declare namespace Angular2NvD3 {
    class NgNvD3 {
        private el;
        private data;
        private options;
        private chart;
        private svg;
        private viewInitialize;
        private static instance;
        constructor(el: any, options: any, data: any);
        static getInstance(el: any, options: any, data: any): NgNvD3;
        isViewInitialize(value: boolean): void;
        updateWithOptions(): void;
        private updateWithData(data);
        private configure(chart, options, chartType);
        private configureEvents(dispatch, options);
        private clearElement();
    }
}
