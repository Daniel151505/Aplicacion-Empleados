import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor(private fb: FormBuilder,
              private empleadoService: EmpleadoService,
              private route: Router,
              private snackBar: MatSnackBar) {
      this.myform = this.fb.group({
        nombreCompleto: [''],
        correo: [''],
        fechaIngreso: [''],
        telefono: [''],
        estadoCivil: [''],
        sexo: ['']
      })
   }

  ngOnInit(): void {
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
    this.empleadoService.agregarEmpleado(empleado)
    this.route.navigate(['/'])
  }

}
