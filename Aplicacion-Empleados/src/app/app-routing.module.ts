import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';

const routes: Routes = [
  { path: '', component: ListarEmpleadoComponent},
  { path: 'add',component: AddEditEmpleadoComponent},  
  { path: 'edit/:id', component: AddEditEmpleadoComponent},
  { path: '**', component: ListarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
