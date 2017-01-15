"use strict";
var testing_1 = require("@angular/core/testing");
var angular2_nvd3_component_1 = require("../angular2-nvd3/angular2-nvd3.component");
var sample_data_1 = require("./sample-data");
sample_data_1.SampleData.chartTypes.forEach(function (type) {
    describe("tasks:NvD3Component " + type, function () {
        var component;
        var fixture;
        var componentElement;
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [angular2_nvd3_component_1.NvD3Component],
            });
            fixture = testing_1.TestBed.createComponent(angular2_nvd3_component_1.NvD3Component);
            component = fixture.componentInstance;
            component.options = sample_data_1.SampleData.allOptions[type];
            component.data = sample_data_1.SampleData.allData[type];
            fixture.detectChanges();
            componentElement = fixture.nativeElement;
        });
        it("should have svg", function () {
            expect(componentElement.querySelectorAll('svg').length).toBe(1);
        });
        it('should svg have class nvd3-svg', function () {
            var gElement = componentElement.querySelector('svg');
            expect(gElement.classList).toContain('nvd3-svg');
        });
        it("should g have class nv-" + type, function () {
            var gElement = componentElement.querySelector('g');
            expect(gElement.className.baseVal).toContain(sample_data_1.SampleData.chartClassExpected[type]);
        });
    });
});
