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
    
    constructor(private _peliculasService:PeliculasService , 
                private _router:Router,
                private _routeParams:RouteParams){
    }

    onCrearPelicula(titulo, director, anio){
        let pelicula:OPelicula = new OPelicula(77, titulo, director, anio);
        this._peliculasService.insertPelicula(pelicula);

        this._router.navigate(["Peliculas"])
    }

    ngOnInit():any{
        this.tituloPelicula = this._routeParams.get("titulo");
    }
}