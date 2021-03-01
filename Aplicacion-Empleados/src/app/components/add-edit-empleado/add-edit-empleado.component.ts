import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css']
})
export class AddEditEmpleadoComponent implements OnInit {
  estadosCiviles: any[] = ['Soltero' , 'Casado' , 'Divorciado']
  constructor() { }

  ngOnInit(): void {
  }

}
