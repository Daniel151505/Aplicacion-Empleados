import { Injectable } from '@angular/core';
import { EmpleadoModule } from '../models/empleado/empleado.module';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listaEmpleado: EmpleadoModule[] = [
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
}
