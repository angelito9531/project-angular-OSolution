import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './components/contador/contador.module';
import { DbzModule } from './components/dbz/dbz.module';
import { HeroesModule } from './components/heroes/heroes.module';
import { PersonajesComponent } from './components/dbz/personajes/personajes.component';


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
