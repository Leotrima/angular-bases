import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  heroes:string[] = ['Spiderman','Ironman','Hulk','Thor','Capitán América'];
  heroeBorrado:string='';

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
  }

}

/* 

En el siguente fragmento de codigo podemos ver la 
utilizacion del *ngFor el cual nos permite tomar
informacion desde un array y traer los datos de 
forma dinamica.

<ul>
    <li *ngFor="let heroe of heroes; let i=index">
       {{i + 1}} - {{heroe}}
    </li>
</ul>

El .shit() elimina el primer elemento del arreglo y lo 
devuelve, eso quiere decir que si creamos una variable
y le asignamos esto this.heroes.shift(); en la variable
quedaria el elemento borrado.

borrarHeroe(){
    const heroeBorrado = this.heroes.shift();
    console.log(heroeBorrado);
}

La directiva *ngIf nos permite hacer que aparezcan o 
desaparezcan elementos html. Esta directiva es muy 
similar al if, tambien actua dependiendo del valor 
que recive ya sea un true o false

Ng-Template y ngIf-else

En el siguiente ejemplo utilizamos la etiqueta <ng-template> que es propia 
de angular la cual nos permite utilizar una referencia local para 
asignarlo al *ngIf y hacer que hace otra parte de la condicion no solo 
un if sino tambien un else

<div *ngIf="heroeBorrado; else noBorrado">
    <h3>Héroe Borrado: <small>{{heroeBorrado}}</small></h3>
</div>

<ng-template #noBorrado>
    <h3>No ha borrado nada</h3>
</ng-template>



*/