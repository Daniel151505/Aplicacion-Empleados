import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.module';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listaEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Lucas Martinez', 
      correo: 'martinez@gmail.com',
      telefono: 12453274,
      sexo: 'Masculino',
      fechaIngreso: new Date(),
      estadoCivil: 'Soltero'
    }
  ]

  constructor() { }

  getEmpleado() {
    this.listaEmpleado.slice()
  }
}
