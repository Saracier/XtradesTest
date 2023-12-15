import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CompetitionsComponent } from './containers/competitions/competitions.component';
import { CardComponent } from './components/card/card.component';
import { PlayerComponent } from './components/player/player.component';
import { CtaButtonComponent } from './components/cta-button/cta-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompetitionsComponent,
    CardComponent,
    PlayerComponent,
    CtaButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
