import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Empleado { 
  nombreCompleto: string
  telefono: number
  correo: string
  fechaIngreso: Date
  estadoCivil: string
  sexo: string
}
