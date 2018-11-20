import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms1',
  template: `
    <!-- Agregamos un formulario. Con # le ponemos un nombre -->
    <form #miFormulario='ngForm' (ngSubmit)="enviar(miFormulario.value)">

      <!-- Creamos un input. Le agregamos la directiva ngModel que lo hace es agregarlo dentro del ngForm-->
      <input type="text" name="miTexto1" ngModel>
      <input type="text" name="miTexto2" ngModel>

      <button type="submit">Enviar</button>
    </form>
  `,
  styles: []
})
export class Forms1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  enviar(formulario: any) {

    // El formgroup es un array de todos los elementos que agregamos dentro del form

    console.log(formulario['miTexto1']);
    console.log(formulario['miTexto2']);
    console.log(formulario);

  }

}
