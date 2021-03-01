import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado.module';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
}]

})
export class AddEditEmpleadoComponent implements OnInit {
  estadosCiviles: any[] = ['Soltero' , 'Casado' , 'Divorciado']
  myform: FormGroup
  idEmpleado: any
  accion = 'Crear'

  constructor(private fb: FormBuilder,
              private empleadoService: EmpleadoService,
              private route: Router,
              private snackBar: MatSnackBar,
              private Route: ActivatedRoute) {
      this.myform = this.fb.group({
        nombreCompleto: ['', [Validators.required, Validators.maxLength(20)]], 
        correo: ['', [Validators.required, Validators.email]],
        fechaIngreso: ['', [Validators.required]],
        telefono: ['', [Validators.required]],
        estadoCivil: ['', [Validators.required]],
        sexo: ['', [Validators.required]]
      })
      const idParam = 'id'
      this.idEmpleado = this.Route.snapshot.params[idParam]
   }

  ngOnInit(): void {
    if (this.idEmpleado !== undefined) {
        this.accion = 'Editar'
        this.editar()
    }
  }

  guardarEmpleado(){
    const empleado: Empleado = {
      nombreCompleto:this.myform.get('nombreCompleto').value,
      correo:this.myform.get('correo').value,
      fechaIngreso:this.myform.get('fechaIngreso').value,
      telefono:this.myform.get('telefono').value,
      estadoCivil:this.myform.get('estadoCivil').value,
      sexo:this.myform.get('sexo').value,
    }
  }
  
  agregarEmpleado(empleado: Empleado){
    this.empleadoService.agregarEmpleado(empleado)
    this.snackBar.open('¡El empleado fue registrado con éxito!','',{
      duration: 30000
    })
    this.route.navigate(['/'])
  }

  editar(){
    const empleado: Empleado = this.empleadoService.getEmpleadosEditar(this.idEmpleado)
    this.myform.patchValue({
      nombreCompleto: empleado.nombreCompleto,
      correo: empleado.correo,
      fechaIngreso: empleado.fechaIngreso,
      telefono: empleado.telefono,
      estadoCivil: empleado.estadoCivil,
      sexo: empleado.sexo
    })
  }

}
