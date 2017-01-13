import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CalculatorComponent }  from './components/calculator/calculator.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CalculatorComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
