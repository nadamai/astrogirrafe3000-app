import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewportComponent } from './viewport/viewport.component';
import { IntroComponent } from './intro/intro.component';
import { StarComponent } from './star/star.component';
import { TextComponent } from './text/text.component';
import { HeroComponent } from './hero/hero.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewportComponent,
    IntroComponent,
    StarComponent,
    TextComponent,
    HeroComponent,
    TitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
