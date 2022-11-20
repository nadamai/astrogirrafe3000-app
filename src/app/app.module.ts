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
import { StarMovingComponent } from './star-moving/star-moving.component';
import { GameplayComponent } from './gameplay/gameplay.component';
import { StarGameplayComponent } from './star-gameplay/star-gameplay.component';
import { ControlsComponent } from './controls/controls.component';
import { JoystickComponent } from './joystick/joystick.component';
import { AsteroidComponent } from './asteroid/asteroid.component';
import { ScoreComponent } from './score/score.component';
import { GameoverComponent } from './gameover/gameover.component';
import { HpComponent } from './hp/hp.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewportComponent,
    IntroComponent,
    StarComponent,
    TextComponent,
    HeroComponent,
    TitleComponent,
    StarMovingComponent,
    GameplayComponent,
    StarGameplayComponent,
    ControlsComponent,
    JoystickComponent,
    AsteroidComponent,
    ScoreComponent,
    GameoverComponent,
    HpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
