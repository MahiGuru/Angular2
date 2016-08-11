import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components here
import { AppComponent }  from './app.component';

//Directives here
import {HighlightDirective} from "../directives/myhighlight";


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, HighlightDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
