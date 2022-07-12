import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-dbz',
  templateUrl: './dbz.component.html',
  styleUrls: ['./dbz.component.css']
})
export class DbzComponent implements OnInit {
  personajenuevo:Personaje={
    nombre:"",
    poder:0
  }
  listaPersonajes:Personaje[] =[
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

  agregarNuevoPersonaje(argumento:Personaje):void{
    this.listaPersonajes.push(argumento);
  }

 

}
