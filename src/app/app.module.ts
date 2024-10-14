import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeServiceComponent } from './home-service/home-service.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { HomeMiddleComponent } from './home-middle/home-middle.component';
import { Middle2Component } from './middle2/middle2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeServiceComponent,
    HomeVideoComponent,
    HomeMiddleComponent,
    Middle2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
