import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';

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

  constructor(private fb: FormBuilder) {
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

}
