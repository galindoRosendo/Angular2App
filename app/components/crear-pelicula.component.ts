import { Component } from 'angular2/core';
import {OPelicula} from "../models/peliculas";
import {Router} from "angular2/router";
import {PeliculasService} from "../services/peliculas.service";

@Component({
    selector:'contacto',
    templateUrl:'app/views/crear-pelicula.html',
    providers:[PeliculasService]    
})

export class CrearPeliculaComponent{

    constructor(private _peliculasService:PeliculasService , private _router:Router){
    }

    onCrearPelicula(titulo, director, anio){
        let pelicula:OPelicula = new OPelicula(77, titulo, director, anio);
        this._peliculasService.insertPelicula(pelicula);

        this._router.navigate(["Peliculas"])
    }
}