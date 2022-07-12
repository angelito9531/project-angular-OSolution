import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  //@input("nombredelparametro") se peude cambiar el nombre del parametro escribiendo ese nombre en el input
  //@Input() listaPersonajes:Personaje[]=[]
  get listaPersonajes(){
    return this.dbzservice.personajes;
  }
  constructor(private dbzservice: DbzService){

  }

}
