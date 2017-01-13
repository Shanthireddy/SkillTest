import { Component } from '@angular/core';

@Component({
  selector: 'calculator',
  styleUrls: ['./app/components/calculator/calculator.style.css'],
  templateUrl: './app/components/calculator/calculator.html',
})
export class CalculatorComponent {
  current: string;
  screen: string;
  output: string;
  limit: number;
  zero: number;
  period: string;
  operator: string;
  constructor() {
    this.screen = '';
    this.limit = 0;
  }


  public isNum(key: any): boolean {
    return !isNaN(key) &&
      !isNaN(parseInt(key, 10));
  }

  public keyPressed(key: any): void {
    switch (true) {
      case /del/.test(key):
        //Delete    
        this.screen = "";
        break;
      case key === '=':
        //Equalto
        if (this.screen === this.output) {
          this.screen = eval(this.output);
        }
        else {
          this.screen = "";
        }
        break;
      case key === '.':
        //Period
        if (this.screen === "") {
          this.output = this.screen = this.screen.concat("0.");
        }
        else if (this.screen === this.output) {
          this.screen = this.screen.concat(".");
        }
        break;
      case key === '0':
        //Zero
        if (this.screen === "") {
          this.output = this.screen = key;
        }
        else if (this.screen === this.output) {
          this.output = this.screen += key;
        }
        break;
      case this.isNum(key):
        //Numbers 1-9
        if (this.limit > 15) {
          alert("Sorry no more input is allowed");
        } else {
          this.output = this.screen += key;
          this.limit = this.output.length;
        }
        break;
      default:
        //Operators
        if (this.screen === "") {
          this.screen = this.screen.concat("");
        }
        else if (this.output) {
          this.screen = this.output.concat(key);
        }
        break;
    }
    //Remove leading zeros.
    if (this.isNum(key) && parseInt(key, 10) !== 0)
      this.output = this.screen = this.screen.replace(/^0+/, '');
  }

}
