import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './dbz/dbz.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { ListaPersonajesComponent } from './lista-personajes/lista-personajes.component';



@NgModule({
  declarations: [
    DbzComponent,
    PersonajesComponent,
    ListaPersonajesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DbzComponent
  ]
})
export class DbzModule { }
