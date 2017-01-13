"use strict";
var calculator_component_1 = require('./calculator.component');
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
describe('CalculatorComponent', function () {
    var de;
    var comp;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [calculator_component_1.CalculatorComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(calculator_component_1.CalculatorComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
    });
    it('should create component', function () { return expect(comp).toBeDefined(); });
    it('should clear screen on del', function () {
        comp.screen = "8*6";
        comp.keyPressed('del');
        expect(comp.screen).toEqual('');
    });
});
//# sourceMappingURL=calculator.component.spec.js.map