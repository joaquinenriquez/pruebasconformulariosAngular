import { Component, OnInit } from '@angular/core';

// Importamos FormBuilder y FormGroup
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-forms2',
  template: `
    <!--Creamos un formulario y utilizamos -->
    <form [formGroup]="miFormulario" (ngSubmit)="enviar(miFormulario.value)">

    <!--Creamos un input y se lo asignamos miFormulario-->
    <input type="text" [formControl]="miFormulario.controls['miTexto1']">

    <button type="submit">Enviar</button>

    </form>
  `,
  styles: []
})
export class Forms2Component implements OnInit {
  // Declaramos una variable tipo FormGroup
  miFormulario: FormGroup;


  // Inyectamos el FormBuilder
  constructor(miFormBuilder: FormBuilder) {
    // Creamos el FormGroup por medio del FormBuilder
    this.miFormulario = miFormBuilder.group({'miTexto1': ['hola mundo']});
   }

   enviar(valor: string): void {
    console.log('Se mando el valor: ', valor);
   }

  ngOnInit() {
  }

}
