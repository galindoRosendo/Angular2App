import { Component } from 'angular2/core';
import {OPelicula} from "../models/peliculas";
import {Router, RouteParams} from "angular2/router";
import {PeliculasService} from "../services/peliculas.service";
import {OnInit} from "angular2/core";

@Component({
    selector:'contacto',
    templateUrl:'app/views/crear-pelicula.html',
    providers:[PeliculasService]    
})

export class CrearPeliculaComponent implements OnInit{
    public tituloPelicula="";
    public nuevaPelicula:OPelicula;
    constructor(private _peliculasService:PeliculasService , 
                private _router:Router,
                private _routeParams:RouteParams){
    }

    onSubmit(){
        this._peliculasService.insertPelicula(this.nuevaPelicula);

        this._router.navigate(["Peliculas"]);
    }

    ngOnInit():any{
        this.tituloPelicula = this._routeParams.get("titulo");
        this.nuevaPelicula=new OPelicula(
            0,
            this._routeParams.get("Titulo"),
            this._routeParams.get("Director"),
            parseInt(this._routeParams.get("Anio"))
            );
    }
}