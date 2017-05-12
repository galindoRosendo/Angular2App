import {Injectable} from "angular2/core";
import {PELICULAS} from "./mock.peliculas";
import {OPelicula} from "../models/peliculas";

@Injectable ()
export class PeliculasService{

    getPeliculas(){
        return PELICULAS;
    }

    insertPelicula(pelicula:OPelicula){
        Promise.resolve(PELICULAS)
            .then((peliculas:OPelicula[])=>peliculas.push(pelicula));
    }
}