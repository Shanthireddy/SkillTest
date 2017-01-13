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
var core_1 = require('@angular/core');
var CalculatorComponent = (function () {
    function CalculatorComponent() {
        this.name = 'Angular2';
        this.screen = '';
    }
    CalculatorComponent.prototype.isNum = function (key) {
        return !isNaN(key) &&
            !isNaN(parseInt(key, 10));
    };
    CalculatorComponent.prototype.keyPressed = function (key) {
        switch (true) {
            case /del/.test(key):
                this.screen = "";
                break;
            case key === '=':
                if (this.screen === this.output) {
                    this.screen = eval(this.output);
                }
                else {
                    this.screen = "";
                }
                break;
            case key === '.':
                if (this.screen === "") {
                    this.output = this.screen = this.screen.concat("0.");
                }
                else if (this.screen === this.output) {
                    this.screen = this.screen.concat(".");
                }
                break;
            case key === '0':
                if (this.screen === "") {
                    this.output = this.screen = key;
                }
                else if (this.screen === this.output) {
                    this.output = this.screen += key;
                }
                break;
            case this.isNum(key):
                this.output = this.screen += key;
                this.limit = this.output.length;
                if (this.limit > 16) {
                    alert("Sorry no more input is allowed");
                }
                break;
            default:
                //operators
                if (this.screen === "") {
                    this.screen = this.screen.concat("");
                }
                else if (this.output) {
                    this.screen = this.output.concat(key);
                }
                break;
        }
        if (this.isNum(key) && parseInt(key, 10) !== 0)
            this.output = this.screen = this.screen.replace(/^0+/, '');
    };
    CalculatorComponent = __decorate([
        core_1.Component({
            selector: 'calculator',
            styleUrls: ['./app/components/calculator/calculator.style.css'],
            templateUrl: './app/components/calculator/calculator.html',
        }), 
        __metadata('design:paramtypes', [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
exports.CalculatorComponent = CalculatorComponent;
//# sourceMappingURL=calculator.component.js.map