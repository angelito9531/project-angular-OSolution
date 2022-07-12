import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


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

  constructor(private servicioDbz:DbzService) { }

  ngOnInit(): void {
  }  

  agregarNuevoPersonaje(argumento:Personaje):void{
    //this.listaPersonajes.push(argumento);
  }

 

}
