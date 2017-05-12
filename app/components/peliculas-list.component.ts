import { Component } from 'angular2/core';
import {OPelicula} from "../models/peliculas";
import {PeliculasService} from "../services/peliculas.service";

@Component({
    selector:'peliculas-list',
    templateUrl:'app/views/peliculas-list.html',
    providers:[PeliculasService]    
})


export class PeliculasListComponent{

    public MostrarDatos:boolean;
    public Peliculas:Array<OPelicula>;
    public Pelicula:OPelicula;
    public PeliculaElegida:OPelicula;

    constructor(private _PeliculasService:PeliculasService){
        
        this.MostrarDatos=false;
        
        this.Peliculas=this._PeliculasService.getPeliculas();

        this.Pelicula = this.Peliculas[0];
        
        this.PeliculaElegida=this.Peliculas[0];

    }

    onShowHide(value){
        this.MostrarDatos=value;
    }

    debug(Titulo=null){
        if(Titulo!=null){
            console.log(this.Pelicula.Titulo)
        }else{
            console.log(this.Pelicula)
        }
        console.log()
    }

    onChangeMovie(pelicula){
        this.Pelicula=pelicula;
        this.PeliculaElegida=pelicula;
    }
}