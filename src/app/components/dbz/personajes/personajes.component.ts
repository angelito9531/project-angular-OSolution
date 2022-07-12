import { Component, Input } from '@angular/core';
import { Personajes } from '../interfaces/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  //@input("nombredelparametro") se peude cambiar el nombre del parametro escribiendo ese nombre en el input
  @Input() listaPersonajes:Personajes[]=[]

}
