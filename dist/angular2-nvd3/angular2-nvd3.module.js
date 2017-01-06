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
var angular2_nvd3_component_1 = require("./angular2-nvd3.component");
var angular2_nvd3_directive_1 = require("./angular2-nvd3.directive");
var NvD3Module = (function () {
    function NvD3Module() {
    }
    return NvD3Module;
}());
NvD3Module = __decorate([
    core_1.NgModule({
        declarations: [
            angular2_nvd3_component_1.NvD3Component,
            angular2_nvd3_directive_1.NvD3Directive
        ],
        exports: [
            angular2_nvd3_component_1.NvD3Component,
            angular2_nvd3_directive_1.NvD3Directive
        ]
    }),
    __metadata("design:paramtypes", [])
], NvD3Module);
exports.NvD3Module = NvD3Module;
