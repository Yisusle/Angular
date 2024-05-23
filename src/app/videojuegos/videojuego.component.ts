import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";

@Component({
    selector: 'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Video Juegos";
        this.listado = "Listado de los Juegos mas populares";

        console.log("Se ha cargado el componente: videojuego.component.ts");
    }
    
    ngOnInit(){
        console.log("OnInit ejecutado.");
    }

    ngDoCheck() {
        console.log("Docheck ejecutado.");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo del componente!";
    }

    ngOnDestroy() {
        console.log("OnDestroy ejecutado.");
    }
}