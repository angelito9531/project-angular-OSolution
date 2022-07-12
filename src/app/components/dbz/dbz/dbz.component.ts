import { Component, OnInit } from '@angular/core';
import { Personajes } from '../interfaces/personaje';


@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrls: ['./dbz.component.css']
})
export class DbzComponent implements OnInit {
  personajenuevo:Personajes={
    nombre:"",
    poder:0
  }
  listaPersonajes:Personajes[] =[
    {
      nombre:"Goku",
      poder:15000
    },
    {
      nombre:"Veggeta",
      poder:8500
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }  

  agregarPersonaje():void{
    if(this.personajenuevo.nombre.trim().length === 0){return}
    this.listaPersonajes.push(this.personajenuevo);
    this.limpiarEntradadePersonaje()
  }

  limpiarEntradadePersonaje():void{
    this.personajenuevo={
      nombre:"",
      poder:0
    }
  }

}
