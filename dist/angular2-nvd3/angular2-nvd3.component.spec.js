"use strict";
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var angular2_nvd3_component_1 = require("./angular2-nvd3.component");
describe('tasks:NvD3Component', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [angular2_nvd3_component_1.NvD3Component],
        });
        fixture = testing_1.TestBed.createComponent(angular2_nvd3_component_1.NvD3Component);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('app-nvd3'));
        el = de.nativeElement;
    });
    it('should call ngOnChanges', function () {
        fixture.detectChanges();
        expect(comp.ngOnChanges).toHaveBeenCalled();
    });
    it('should call ngAfterViewInit', function () {
        fixture.detectChanges();
        expect(comp.ngAfterViewInit).toHaveBeenCalled();
    });
});
