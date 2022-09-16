// importacion de modulos y componentes
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeesComponent } from './components/employees/employees.component';
// Rutas de la pagina
const routes: Routes = [

  {path: '',pathMatch:'full',redirectTo: 'employees'},
  {path:'employees',component: EmployeesComponent},
  {path:'employee-create',component: EmployeeCreateComponent},
  {path:'employee-edit/:id',component: EmployeeEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
