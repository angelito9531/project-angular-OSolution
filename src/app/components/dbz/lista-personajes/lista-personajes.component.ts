import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-lista-personajes',
  templateUrl: './lista-personajes.component.html',
  styleUrls: ['./lista-personajes.component.css']
})
export class ListaPersonajesComponent implements OnInit {
  @Input() personajenuevo!:Personaje; 
  //@Input() listaPersonajes!:Personajes[];

  @Output() agregandoPersonaje:EventEmitter<Personaje> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  agregarPersonaje():void{
    if(this.personajenuevo.nombre.trim().length === 0){return}
    this.agregandoPersonaje.emit(this.personajenuevo)
    //this.listaPersonajes.push(this.personajenuevo);
    this.limpiarEntradadePersonaje()
  }

  limpiarEntradadePersonaje():void{
    this.personajenuevo={
      nombre:"",
      poder:0
    }
  }

}
