import { Component } from 'angular2/core';
import {OPelicula} from "./models/peliculas";

@Component({
    selector:'mi-app',
    templateUrl:'app/views/peliculas.html',
    styleUrls:['../assets/css/style.css']
})

export class AppComponent{

    public TituloPagina:string = 'Mejores Peliculas';
    public MostrarDatos:boolean;
    public Peliculas:Array<OPelicula>;
    Pelicula:OPelicula;
    
    constructor(){
        this.MostrarDatos=false;
        this.Pelicula= new OPelicula(1,"Batman v Superman","Rosendo Galindo", 2017);
        
        this.Peliculas=[
            new OPelicula(1,"WonderWoman: The Amazon Ladys","Rosendo Galindo", 2017),
            new OPelicula(1,"SuperMan: Man of steel","Rosendo Galindo", 2017),
            new OPelicula(1,"Flash: Time travel","Rosendo Galindo", 2017),
            new OPelicula(1,"AquaMan: The DeepSea","Rosendo Galindo",null )
        ];
        
        this.debug();
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
}