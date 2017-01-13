export declare namespace Angular2NvD3 {
    class NgNvD3 {
        private el;
        private chart;
        private svg;
        private viewInitialize;
        private static instance;
        constructor(el: any);
        static getInstance(el: any): NgNvD3;
        isViewInitialize(value: boolean): void;
        updateWithOptions(options: any, data: any): void;
        private updateWithData(data, options);
        private configure(chart, options, chartType);
        private configureEvents(dispatch, options);
        private clearElement();
    }
}
