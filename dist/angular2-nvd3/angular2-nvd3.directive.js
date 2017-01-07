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
var angular2_nvd3_core_1 = require("./angular2-nvd3.core");
var NvD3Directive = (function () {
    function NvD3Directive(el) {
        this.el = el;
        this.ngNvD3 = angular2_nvd3_core_1.Angular2NvD3.NgNvD3.getInstance(this.el, this.data, this.options);
    }
    NvD3Directive.prototype.ngOnChanges = function () {
        this.ngNvD3.updateWithOptions();
    };
    NvD3Directive.prototype.ngAfterViewInit = function () {
        this.ngNvD3.isViewInitialize(true);
        this.ngNvD3.updateWithOptions();
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
