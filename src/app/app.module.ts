import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FMaterialModule } from './utils/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { NotifierModule } from 'angular-notifier';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpRequestsInterceptor } from './interceptors/http-requests.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    LoadingComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    FMaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule,
    NotifierModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    FMaterialModule,
    NotifierModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
