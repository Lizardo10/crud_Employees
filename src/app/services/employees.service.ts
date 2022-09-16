// Importacion de recursos a utilizar
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';
@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  // Metodos o funciones para consultar a la API o backend
API:string = 'http://localhost/empleados/' // API echa en PHP
  constructor( private httpClientService: HttpClient) { }//Constructos para declarar el modulo HttpClient
  //Obtener Empleados
GetEployees():Observable<any>{
  return this.httpClientService.get(this.API);
}
//Obtener un unico empleado
GetAEployees(id:any):Observable<any>{
  return this.httpClientService.get(this.API+"?consultar="+id);
}
//Eliminar un  empleado
DeleteEmployee(id:any):Observable<any>{
  return this.httpClientService.get(this.API+"?borrar="+id);
}
//Agregar un empleado
AddEmployee(employeeData: Employee):Observable<any>{
return this.httpClientService.post(this.API+"?insertar=1",employeeData)
}
//Actualizar un empleado
UpdateEmployee(id:any,employeeData: any):Observable<any>{
  return this.httpClientService.post(this.API+"?actualizar="+id,employeeData)
}
}
