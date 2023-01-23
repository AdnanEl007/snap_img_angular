import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import * as en from '@angular/common/locales/en';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { AppRootingModule } from './app-rooting.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    FaceSnapListComponent,
    HeaderComponent,
    LandingPageComponent,
    SingleFaceSnapComponent
  ],
  imports: [
    BrowserModule,
    AppRootingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue:'en-FR'} // i am using here en in case you want to change it to fr or...
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    registerLocaleData(en.default);
  }
 }
