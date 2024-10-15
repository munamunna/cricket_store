import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeServiceComponent } from './home-service/home-service.component';
import { HomeVideoComponent } from './home-video/home-video.component';
import { HomeMiddleComponent } from './home-middle/home-middle.component';
import { Middle2Component } from './middle2/middle2.component';
import { HomeVedioGalleryComponent } from './home-vedio-gallery/home-vedio-gallery.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeServiceComponent,
    HomeVideoComponent,
    HomeMiddleComponent,
    Middle2Component,
    HomeVedioGalleryComponent,
    HomeFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
