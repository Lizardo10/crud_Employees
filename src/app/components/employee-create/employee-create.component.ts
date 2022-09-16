// importacion de modulos
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { FormGroup, FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  // declaracion del grupodel formulario
formsEmployeees:FormGroup;
  constructor(
public form:FormBuilder,
private employeesService:EmployeesService,
private router:Router

  ) {
    this.formsEmployeees = this.form.group({
      nombre: [''],
      correo: ['']
    })
  }

  ngOnInit(): void {
  }
ngSubmit(): any{
  // Crear el nuevo registro
  this.employeesService.AddEmployee(this.formsEmployeees.value).subscribe(()=>{

    window.alert("Employye Created")

  this.router.navigateByUrl('/employees');

  });
}
}
