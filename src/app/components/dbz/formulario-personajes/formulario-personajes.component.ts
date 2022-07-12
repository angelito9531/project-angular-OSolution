import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './formulario-personajes.component.html',
  styleUrls: ['./formulario-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {
  @Input() personajenuevo!:Personaje; 
  //@Input() listaPersonajes!:Personajes[];

  //@Output() agregandoPersonaje:EventEmitter<Personaje> = new EventEmitter()
  constructor(private dbzservice:DbzService) { }

  ngOnInit(): void {
  }

  agregarPersonaje():void{
    if(this.personajenuevo.nombre.trim().length === 0){return}
   // this.agregandoPersonaje.emit(this.personajenuevo)
    this.dbzservice.agregarPersonaje(this.personajenuevo);
    
    this.limpiarEntradadePersonaje()
  }

  limpiarEntradadePersonaje():void{
    this.personajenuevo={
      nombre:"",
      poder:0
    }
  }

}
