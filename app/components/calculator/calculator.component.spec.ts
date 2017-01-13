import { CalculatorComponent } from './calculator.component';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('CalculatorComponent', function () {
    let de: DebugElement;
    let comp: CalculatorComponent;
    let fixture: ComponentFixture<CalculatorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalculatorComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorComponent);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(By.css('h1'));
    });

    it('should create component', () => expect(comp).toBeDefined());

    it('should clear the screen on del', () => {
        comp.screen = "8*6";
        comp.keyPressed('del');
        expect(comp.screen).toEqual('')
    });

    it('should print 30 on equalt to', () => {
        comp.screen = "5*6";
        comp.output = "5*6";
        comp.keyPressed('=');
        expect(comp.screen).toEqual('30')
    });

    it('should clear the screen on equaltto', () => {
        comp.screen = "5*6";
        comp.output = "";
        comp.keyPressed('=');
        expect(comp.screen).toEqual('')
    });

    it('should print 0 followed by a period on period', () => {
        comp.screen = "";
        comp.output = "";
        comp.keyPressed('.');
        expect(comp.screen).toEqual('0.')
    });

    it('should print 5 followed by a period on period', () => {
        comp.screen = "5";
        comp.output = "5";
        comp.keyPressed('.');
        expect(comp.screen).toEqual('5.')
    });

    it('should print 0 on zero', () => {
        comp.screen = "0";
        comp.keyPressed('0');
        expect(comp.screen).toEqual('0')
    });

    it('should print 50 on zero', () => {
        comp.screen = "5";
        comp.output = "5";
        comp.keyPressed('0');
        expect(comp.screen).toEqual('50')
    });

    it('should print 1234567890123456 on 2', () => {
        comp.screen = "1234567890123456";
        comp.keyPressed('2');
        expect(comp.screen).toEqual('1234567890123456')
    });

    it('should print 55 on 5', () => {
        comp.screen = "5";
        comp.keyPressed('5');
        expect(comp.screen).toEqual('55')
    });

    it('should print nothing on *', () => {
        comp.screen = "";
        comp.keyPressed('*');
        expect(comp.screen).toEqual('')
    });

    it('should print 8* on *', () => {
        comp.screen = "8";
        comp.output = "8";
        comp.keyPressed('*');
        expect(comp.screen).toEqual('8*')
    });

});
