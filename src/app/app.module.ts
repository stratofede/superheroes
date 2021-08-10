import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FMaterialModule } from './utils/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SuperheroesModule } from './superheroes-module/superheroes.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SuperheroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
