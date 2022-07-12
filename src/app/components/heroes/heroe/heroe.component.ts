import { Component } from "@angular/core";

@Component({
    selector:"heroe-app",
    templateUrl:"./heroe.component.html"
})
export class HeroeComponent{
    title:string ="This is Heroe Component";
    nombre:string ="Iron man"
    edad:number = 35

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    getNameAndBirthday():string{
        return `Nombre: ${this.nombre} - Edad: ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre="Spiderman"
    }

    cambiarEdad():void{
        this.edad +=10
    }
}
