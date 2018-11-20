import { Component, OnInit } from '@angular/core';

// Importamos
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms3',
  template: `
  <form [formGroup]="miFormulario" (ngSubmit)="enviar(miFormulario.value)">
  <div>
    <label for="nombre">Nombre</label>
    <input type="text" formControlName="nombre" name="nombre"/>
  </div>
  <div>
    <label for="nombre">Nombre</label>
    <input type="text" formControlName="apellido"/>
  </div>

  <div>
    <label for="mail">Email</label>
    <input type="text" formControlName="email" name="email"/>
  </div>
  <div><input type="text" formControlName="edad"/></div>
  <div><input type="text" formControlName="url"/></div>
  <div><input type="text" formControlName="password"/></div>
  `,
  styles: []
})
export class Forms3Component implements OnInit {

  // Creamos una variable tipo FormGroup y un AbstracControl
  miFormulario: FormGroup;
  miTexto: AbstractControl;


  // Inyectamos el FormBuilder
  constructor(miFormBuilder: FormBuilder) {
    // Creamos el FormGroup con el FormBuilder
    this.miFormulario = miFormBuilder.group({
      // Validators.required quiere decir que el campo es obligatorio
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', Validators.required],
      edad: ['', Validators.required],
      url: ['', Validators.required],
      password: ['', Validators.required]
    });

    // Asignamos el texto al del formulario
    this.miTexto = this.miFormulario.controls['miTexto1'];

  }

  ngOnInit() {
  }

  enviar(valor: string) {
    console.log('Valor ingresado: ', valor);
  }

}
