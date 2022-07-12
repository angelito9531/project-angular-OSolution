import { Component } from "@angular/core";

@Component({
    selector:'contador-app',
    template:`
    <section>
    <h1>{{title}}</h1>

    <h3>Numero: {{numero}}</h3>
    <h4> Base: {{base}}</h4>

    <button (click)="operacion(base)">+{{base}}</button>
    <button (click)="operacion(-base)">-{{base}}</button>
    </section>
    `,
    styles:[]
})
export class ContadorComponent{

    title:string = 'Contador';
    base: number = 5;
    numero:number = 10

    operacion(valor:number):void{
        this.numero +=valor
    }
}