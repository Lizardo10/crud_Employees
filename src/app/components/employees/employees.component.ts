//importacion de modulos y librerias
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
Employees:any;
  constructor( private employeesService:EmployeesService) { }
//Accion a realizar cuamdo carge la pagina
  ngOnInit(): void {
    //Comsultar los empleados
    this.employeesService.GetEployees().subscribe(res=>{
this.Employees= res;
    })

  }
  //Eliminar empleado
  deleteEmployee(id:any,iControl:any){
this.employeesService.DeleteEmployee(id).subscribe(()=>{
    this.Employees.splice(iControl,1)
  })
  }

}
