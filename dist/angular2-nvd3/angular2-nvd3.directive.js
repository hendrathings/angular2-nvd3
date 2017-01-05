"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var d3 = require("d3");
var nv = require("nvd3");
var NvD3Directive = (function () {
    function NvD3Directive(el) {
        this.el = el;
        this.isViewInitialize = false;
    }
    NvD3Directive.prototype.ngOnChanges = function () {
        this.updateWithOptions(this.options);
    };
    NvD3Directive.prototype.ngAfterViewInit = function () {
        this.isViewInitialize = true;
        this.updateWithOptions(this.options);
    };
    NvD3Directive.prototype.ngOnDestroy = function () {
    };
    NvD3Directive.prototype.updateWithOptions = function (options) {
        if (!this.isViewInitialize || !options) {
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
    NvD3Directive.prototype.updateWithData = function (data) {
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
    NvD3Directive.prototype.configure = function (chart, options, chartType) {
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
    NvD3Directive.prototype.configureEvents = function (dispatch, options) {
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
    NvD3Directive.prototype.clearElement = function () {
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
    return NvD3Directive;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NvD3Directive.prototype, "options", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], NvD3Directive.prototype, "data", void 0);
NvD3Directive = __decorate([
    core_1.Directive({ selector: '[appNvD3]' }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], NvD3Directive);
exports.NvD3Directive = NvD3Directive;
