import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()

export class DbzService{
    private _listaPersonajes:Personaje[] =[
        {
          nombre:"Goku",
          poder:15000
        },
        {
          nombre:"Veggeta",
          poder:8500
        }
      ]

      get personajes(){
        return [...this._listaPersonajes];
      }
    constructor(){}

    agregarPersonaje(personajeNuevo:Personaje):void{
        this._listaPersonajes.push(personajeNuevo);
    }

}