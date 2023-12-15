import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CompetitionsComponent } from './containers/competitions/competitions.component';
import { CardComponent } from './components/card/card.component';
import { PlayerComponent } from './components/player/player.component';
import { StatusComponent } from './components/status/status.component';
import { MoreButtonComponent } from './components/more-button/more-button.component';
import { AddButtonComponent } from './components/add-button/add-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CompetitionsComponent,
    CardComponent,
    PlayerComponent,
    MoreButtonComponent,
    StatusComponent,
    AddButtonComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
