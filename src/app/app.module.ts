import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Forms1Component } from './components/forms1/forms1.component';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Forms2Component } from './components/forms2/forms2.component';
import { Forms3Component } from './components/forms3/forms3.component'; // <-- Imoprtamos estos dos modulos

@NgModule({
  declarations: [
    AppComponent,
    Forms1Component,
    Forms2Component,
    Forms3Component
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Agregamos
    ReactiveFormsModule // <-- Agregamos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
