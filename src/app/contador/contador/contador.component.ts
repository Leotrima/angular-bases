

import {Component} from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

    <h1>{{ titulo }}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular(-base)"> -{{base}} </button>
    <span> {{numero}} </span>
    <button (click)="acumular(+base)"> +{{base}} </button>
    
    `
})

export class ContadorComponent{

    titulo: string = 'Contador App';
    numero: number = 10;
    base  : number=5;
  
    acumular(valor:number){
      this.numero = this.numero+valor;
    }
}




/* 
Para que este componente funcione debemos importar la 
propiedad COMPONENT de la libreria @angular/core

import {Component} from '@angular/core';

Despues creamos el decorador

@Component({
    selector: 'app-contador',
    template: `

    <h1>{{ titulo }}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>

    <button (click)="acumular(-base)"> -{{base}} </button>
    <span> {{numero}} </span>
    <button (click)="acumular(+base)"> +{{base}} </button>
    
    `
})

como no vamos a crear ningun archivo html que se relacione con 
este componente utilizamos en el decorador el TEMPLATE normal 
y dentro de este colocamos toda la parte html, esta parte debe ir 
dentro de estas comillas ``


Creamos una clase comun y corriente y colocamos la palabra 
EXPORT delante del CLASS ya que vamos a utilizar este componente
en otro lugar

Dentro de esta colocamos la logica.


export class ContadorComponent{

  titulo: string = 'Contador App';
  numero: number = 10;
  base  : number=5;

  acumular(valor:number){
    this.numero = this.numero+valor;
  }
}

Una vez hecho esto vamos al app.module.ts para agregar este nuevo 
componente que hemos creado

import { ContadorComponent } from './contador.component';


@NgModule({
  declarations: [	
    AppComponent,
    ContadorComponent ==>> (Aqui colocamos el nuevo componente que hemos creado)
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


Para poder utilizar este componente nuevo que hemos creado lo unico que debemos 
hacer es ir al app.component.html y colocar el SELECTOR que utilizamos 
en el DECORADOR del nuevo componente en este caso tendriamos que colocar
<app-contador></app-contador>


*/