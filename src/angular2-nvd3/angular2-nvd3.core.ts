import * as d3 from 'd3';
import * as nv from 'nvd3';

export namespace Angular2NvD3 {

    export class NgNvD3 {
        private el: any;
        private chart: any;
        private svg: any;
        private viewInitialize: boolean = false;
        private static instance: NgNvD3;

        constructor(el) {
            this.el = el;
        }

        static getInstance(el) {
            if (!NgNvD3.instance) {
                NgNvD3.instance = new NgNvD3(el);
            }
            return NgNvD3.instance;
        }

        public isViewInitialize(value: boolean) {
            this.viewInitialize = value;
        }

        public updateWithOptions(options: any, data: any) {
            // Exit if options are not yet bound
            if (!this.viewInitialize || !options) { return; };

            let self = this;

            // Clearing
            this.clearElement();

            // Initialize chart with specific type
            this.chart = nv.models[options.chart.type]();

            // Generate random chart ID
            this.chart.id = Math.random().toString(36).substr(2, 15);

            for (let key in this.chart) {
                if (!this.chart.hasOwnProperty(key)) { continue; }

                if (key[0] === '_') {
                } else if ([
                    'clearHighlights',
                    'highlightPoint',
                    'id',
                    'options',
                    'resizeHandler',
                    'state',
                    'open',
                    'close',
                    'tooltipContent'
                ].indexOf(key) >= 0) {
                } else if (key === 'dispatch') {
                    this.configureEvents(this.chart[key], options.chart[key]);
                } else if ([
                    'bars',
                    'bars1',
                    'bars2',
                    'boxplot',
                    'bullet',
                    'controls',
                    'discretebar',
                    'distX',
                    'distY',
                    'interactiveLayer',
                    'legend',
                    'lines',
                    'lines1',
                    'lines2',
                    'multibar',
                    'pie',
                    'scatter',
                    'scatters1',
                    'scatters2',
                    'sparkline',
                    'stack1',
                    'stack2',
                    'sunburst',
                    'tooltip',
                    'x2Axis',
                    'xAxis',
                    'y1Axis',
                    'y2Axis',
                    'y3Axis',
                    'y4Axis',
                    'yAxis',
                    'yAxis1',
                    'yAxis2'
                ].indexOf(key) >= 0 ||
                // stacked is a component for stackedAreaChart, but a boolean for multiBarChart and multiBarHorizontalChart
                (key === 'stacked' && options.chart.type === 'stackedAreaChart')) {
                    this.configure(this.chart[key], options.chart[key], options.chart.type);
                } else if ((key === 'xTickFormat' || key === 'yTickFormat') && options.chart.type === 'lineWithFocusChart') {
                    // TODO: need to fix bug in nvd3
                } else if ((key === 'tooltips') && options.chart.type === 'boxPlotChart') {
                } else if ((key === 'tooltipXContent' || key === 'tooltipYContent') && options.chart.type === 'scatterChart') {
                } else if (options.chart[key] === undefined || options.chart[key] === null) {
                } else { this.chart[key](options.chart[key]); }
            }

            this.updateWithData(data, options);

            nv.addGraph(() => {
                if (!self.chart) { return; }

                // Remove resize handler. Due to async execution should be placed here, not in the clearElement
                if (self.chart.resizeHandler) { self.chart.resizeHandler.clear(); }

                // Update the chart when window resizes
                self.chart.resizeHandler = nv.utils.windowResize(() => {
                    if (self.chart && self.chart.update) { self.chart.update(); }
                });

                return self.chart;
            }, options.chart['callback']);
        }

        private updateWithData(data: any, options: any) {
            if (data) {
                // remove whole svg element with old data
                d3.select(this.el.nativeElement).select('svg').remove();

                let h, w;

                // Select the current element to add <svg> element and to render the chart in
                this.svg = d3.select(this.el.nativeElement).append('svg');
                if (h = options.chart.height) {
                    if (!isNaN(+h)) { h += 'px'; }
                    this.svg.attr('height', h).style({height: h});
                }
                if (w = options.chart.width) {
                    if (!isNaN(+w)) { w += 'px'; }
                    this.svg.attr('width', w).style({width: w});
                } else {
                    this.svg.attr('width', '100%').style({width: '100%'});
                }

                this.svg.datum(data).call(this.chart);
            }
        }

        private configure(chart, options, chartType) {
            if (chart && options) {

                for (let key in chart) {
                    if (!chart.hasOwnProperty(key)) { continue; }

                    let value = chart[key];

                    if (key[0] === '_') {
                    } else if (key === 'dispatch') {
                        this.configureEvents(value, options[key]);
                    } else if (key === 'tooltip') {
                        this.configure(chart[key], options[key], chartType);
                    } else if (key === 'contentGenerator') {
                        if (options[key]) { chart[key](options[key]); }
                    } else if ([
                        'axis',
                        'clearHighlights',
                        'defined',
                        'highlightPoint',
                        'nvPointerEventsClass',
                        'options',
                        'rangeBand',
                        'rangeBands',
                        'scatter',
                        'open',
                        'close'
                    ].indexOf(key) === -1) {
                        if (options[key] === undefined || options[key] === null) {
                        } else {
                            chart[key](options[key]);
                        }
                    }
                }

            }
        }

        private configureEvents(dispatch, options) {
            if (dispatch && options) {
                for (let key in dispatch) {
                    if (!dispatch.hasOwnProperty(key)) { continue; }

                    if (options[key] === undefined || options[key] === null) {
                    } else {
                        dispatch.on(key + '._', options[key]);
                    }
                }
            }
        }

        private clearElement() {
            this.el.nativeElement.innerHTML = '';

            // remove tooltip if exists
            if (this.chart && this.chart.tooltip && this.chart.tooltip.id) {
                d3.select('#' + this.chart.tooltip.id()).remove();
            }

            if (nv.tooltip && nv.tooltip.cleanup) {
                nv.tooltip.cleanup();
            }
            if (this.chart && this.chart.resizeHandler) { this.chart.resizeHandler.clear(); }
            this.chart = null;
        }
    }
}
