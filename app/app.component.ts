import { Component } from 'angular2/core';
import { PeliculasListComponent } from "./components/peliculas-list.component";
import { PeliculasFooterComponent } from "./components/peliculas-footer.component";
import { ContactoComponent } from "./components/contacto.component";
import { CrearPeliculaComponent } from "./components/crear-pelicula.component";

import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
    selector:'mi-app',
    templateUrl:'app/views/peliculas.html',
    directives:[
        PeliculasListComponent,
        PeliculasFooterComponent,
        CrearPeliculaComponent,
        ContactoComponent,
        ROUTER_DIRECTIVES        
    ]
})

@RouteConfig([
    { path:"/peliculas", name:"Peliculas", component:PeliculasListComponent, useAsDefault:true },
    { path:"/crear-oelicula", name:"CrearPelicula", component:CrearPeliculaComponent},
    { path:"/contacto", name:"Contacto", component:ContactoComponent},
])

export class AppComponent{

    public TituloPagina:string = 'Mejores Peliculas';
}