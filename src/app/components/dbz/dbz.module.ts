import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbzComponent } from './dbz/dbz.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { ListaPersonajesComponent } from './formulario-personajes/formulario-personajes.component';
import { DbzService } from './services/dbz.service';



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
  ],
  providers:[DbzService]
})
export class DbzModule { }
