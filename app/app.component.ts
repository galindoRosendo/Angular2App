import { Component } from 'angular2/core';
import {PeliculasListComponent} from "./components/peliculas-list.component";
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";

@Component({
    selector:'mi-app',
    templateUrl:'app/views/peliculas.html',
    directives:[
        PeliculasListComponent,
        PeliculasFooterComponent
    ]
})

export class AppComponent{

    public TituloPagina:string = 'Mejores Peliculas';
}