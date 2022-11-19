import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewportComponent } from './viewport/viewport.component';
import { IntroComponent } from './intro/intro.component';
import { StarComponent } from './star/star.component';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewportComponent,
    IntroComponent,
    StarComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
