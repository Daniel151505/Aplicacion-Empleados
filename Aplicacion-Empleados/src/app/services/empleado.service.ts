import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado.module';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listaEmpleado: Empleado[] = [
    {
      nombreCompleto: 'Lucas Martinez', correo: 'lmartinez@gmail.com', telefono: 3512335522,
      sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero'
    },
    {
      nombreCompleto: 'Rodrigo Aliaga', correo: 'raliaga@gmail.com',
      estadoCivil: 'Soltero', fechaIngreso: new Date('2019-05-25'), sexo: 'Masculino', telefono: 3512334422
    },
    {
      nombreCompleto: 'Maria Funes', correo: 'mfunes@gmail.com',
      estadoCivil: 'Casado', fechaIngreso: new Date('2020-04-27'), sexo: 'Femenino', telefono: 3512553322
    },
    {
      nombreCompleto: 'Lucrecia Juarez', correo: 'maria@gmail.com',
      estadoCivil: 'Soltero', fechaIngreso: new Date('2020-07-25'), sexo: 'Femenino', telefono: 3514665533
    },
    {
      nombreCompleto: 'Federico Gonzalez', correo: 'fgonzalez@gmail.com',
      estadoCivil: 'Soltero', fechaIngreso: new Date('2020-02-31'), sexo: 'Femenino', telefono: 1156688332
    },
    {
      nombreCompleto: 'Estefania Schutz', correo: 'eschutz@gmail.com',
      estadoCivil: 'Soltero', fechaIngreso: new Date('2020-01-31'), sexo: 'Femenino', telefono: 1156678679
    },
    {
      nombreCompleto: 'Maria Belen Arzu', correo: 'mbarzu@gmail.com',
      estadoCivil: 'Soltero', fechaIngreso: new Date('2020-01-31'), sexo: 'Femenino', telefono: 3512576589
    }
  ]

  constructor() { }

  getEmpleado() {
   return this.listaEmpleado.slice()
  }

  eliminarEmpleado(index: number) {
    this.listaEmpleado.splice(index,1)
  }

  agregarEmpleado(empleado: Empleado){
    this.listaEmpleado.unshift(empleado)
  }

  getEmpleadosEditar(index:number){
    return this.listaEmpleado[index]
  }

  editEmpleado(empleado: Empleado, idEmpleado: number) {
    this.listaEmpleado[idEmpleado].nombreCompleto = empleado.nombreCompleto
    this.listaEmpleado[idEmpleado].correo = empleado.correo
    this.listaEmpleado[idEmpleado].fechaIngreso = empleado.fechaIngreso
    this.listaEmpleado[idEmpleado].telefono = empleado.telefono
    this.listaEmpleado[idEmpleado].sexo = empleado.sexo
    this.listaEmpleado[idEmpleado].estadoCivil = empleado.estadoCivil
  }
}
