"use strict";
var d3 = require("d3");
var nv = require("nvd3");
var Angular2NvD3;
(function (Angular2NvD3) {
    var NgNvD3 = (function () {
        function NgNvD3(el, options, data) {
            this.viewInitialize = false;
            this.el = el;
            this.data = data;
            this.options = options;
        }
        NgNvD3.getInstance = function (el, options, data) {
            if (!NgNvD3.instance) {
                NgNvD3.instance = new NgNvD3(el, options, data);
            }
            return NgNvD3.instance;
        };
        NgNvD3.prototype.isViewInitialize = function (value) {
            this.viewInitialize = value;
        };
        NgNvD3.prototype.updateWithOptions = function () {
            var options = this.options;
            if (!this.viewInitialize || !options) {
                return;
            }
            ;
            var self = this;
            this.clearElement();
            this.chart = nv.models[options.chart.type]();
            this.chart.id = Math.random().toString(36).substr(2, 15);
            for (var key in this.chart) {
                if (!this.chart.hasOwnProperty(key)) {
                    continue;
                }
                if (key[0] === '_') {
                }
                else if ([
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
                }
                else if (key === 'dispatch') {
                    this.configureEvents(this.chart[key], options.chart[key]);
                }
                else if ([
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
                    (key === 'stacked' && options.chart.type === 'stackedAreaChart')) {
                    this.configure(this.chart[key], options.chart[key], options.chart.type);
                }
                else if ((key === 'xTickFormat' || key === 'yTickFormat') && options.chart.type === 'lineWithFocusChart') {
                }
                else if ((key === 'tooltips') && options.chart.type === 'boxPlotChart') {
                }
                else if ((key === 'tooltipXContent' || key === 'tooltipYContent') && options.chart.type === 'scatterChart') {
                }
                else if (options.chart[key] === undefined || options.chart[key] === null) {
                }
                else {
                    this.chart[key](options.chart[key]);
                }
            }
            this.updateWithData(this.data);
            nv.addGraph(function () {
                if (!self.chart) {
                    return;
                }
                if (self.chart.resizeHandler) {
                    self.chart.resizeHandler.clear();
                }
                self.chart.resizeHandler = nv.utils.windowResize(function () {
                    if (self.chart && self.chart.update) {
                        self.chart.update();
                    }
                });
                return self.chart;
            }, options.chart['callback']);
        };
        NgNvD3.prototype.updateWithData = function (data) {
            if (data) {
                d3.select(this.el.nativeElement).select('svg').remove();
                var h = void 0, w = void 0;
                this.svg = d3.select(this.el.nativeElement).append('svg');
                if (h = this.options.chart.height) {
                    if (!isNaN(+h)) {
                        h += 'px';
                    }
                    this.svg.attr('height', h).style({ height: h });
                }
                if (w = this.options.chart.width) {
                    if (!isNaN(+w)) {
                        w += 'px';
                    }
                    this.svg.attr('width', w).style({ width: w });
                }
                else {
                    this.svg.attr('width', '100%').style({ width: '100%' });
                }
                this.svg.datum(data).call(this.chart);
            }
        };
        NgNvD3.prototype.configure = function (chart, options, chartType) {
            if (chart && options) {
                for (var key in chart) {
                    if (!chart.hasOwnProperty(key)) {
                        continue;
                    }
                    var value = chart[key];
                    if (key[0] === '_') {
                    }
                    else if (key === 'dispatch') {
                        this.configureEvents(value, options[key]);
                    }
                    else if (key === 'tooltip') {
                        this.configure(chart[key], options[key], chartType);
                    }
                    else if (key === 'contentGenerator') {
                        if (options[key]) {
                            chart[key](options[key]);
                        }
                    }
                    else if ([
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
                        }
                        else {
                            chart[key](options[key]);
                        }
                    }
                }
            }
        };
        NgNvD3.prototype.configureEvents = function (dispatch, options) {
            if (dispatch && options) {
                for (var key in dispatch) {
                    if (!dispatch.hasOwnProperty(key)) {
                        continue;
                    }
                    if (options[key] === undefined || options[key] === null) {
                    }
                    else {
                        dispatch.on(key + '._', options[key]);
                    }
                }
            }
        };
        NgNvD3.prototype.clearElement = function () {
            this.el.nativeElement.innerHTML = '';
            if (this.chart && this.chart.tooltip && this.chart.tooltip.id) {
                d3.select('#' + this.chart.tooltip.id()).remove();
            }
            if (nv.tooltip && nv.tooltip.cleanup) {
                nv.tooltip.cleanup();
            }
            if (this.chart && this.chart.resizeHandler) {
                this.chart.resizeHandler.clear();
            }
            this.chart = null;
        };
        return NgNvD3;
    }());
    Angular2NvD3.NgNvD3 = NgNvD3;
})(Angular2NvD3 = exports.Angular2NvD3 || (exports.Angular2NvD3 = {}));
