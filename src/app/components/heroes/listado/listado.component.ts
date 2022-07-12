import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  title:string = "Listado de heroes"
  heroes:string[]=["Iron man","Spiderman","Hulk","Thor"];
  heroesBorrados:string[]=[];
  constructor() { }

  ngOnInit(): void {
  }

  eliminarHeroe(heroe:string):void{   

    //OTRA FORMA USANDO FILTER
    this.heroesBorrados.push(heroe);
    const heroeEliminado = this.heroes.filter((hero) => hero != heroe);
    this.heroes = heroeEliminado;
  }


}
