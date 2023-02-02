import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})

export class HeroeComponent {
    nombre: string = 'Ironman';
    edad  : number = 45;

    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }
    cambiarEdad():void{
        this.edad = 20;
    }
}

/*

Las `` nos permiten crear template literales dentro del ts
utilizando $ 

Podemos utilizar lo que retorna una funcion directamente
llamandola en el html, en este caso llamamos a la funcion 
obtenerNombre() y ella nos retorna el nombre y la edad

<td>Función:</td>
<dd>{{obtenerNombre()}}</dd>

Tambien podemos llamar metodos get directamente en el html
solo que al ser un metodo get no debe llevar los parentesis 
al final del nombre de la funcion

<td>Capitalizado:</td>
<dd>{{nombreCapitalizado}}</dd>


*/