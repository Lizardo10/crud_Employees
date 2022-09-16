// importacion de modulos
import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';
import { FormGroup, FormBuilder} from "@angular/forms";
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  // definicion de el grupo del formulario
formsEmployees:FormGroup;
theID:any;
  constructor(
    // declarando las utilidades
    private form:FormBuilder,
    private activatedRoute:ActivatedRoute,
    private employeesService:EmployeesService,
    private router:Router
  ) {
    // consultar el id de la url
    this.theID= this.activatedRoute.snapshot.paramMap.get('id');
    this.employeesService.GetAEployees(this.theID).subscribe(res =>{
      this.formsEmployees.setValue({
        nombre:res[0]['nombre'],
        correo:res[0]['correo'],
      })
    })

    this.formsEmployees=this.form.group({
      nombre:[''],
      correo:[''],
    })
  }

  ngOnInit(): void {
  }
ngSubmit(): void {
  // enviar el nuevo registro
this.employeesService.UpdateEmployee(this.theID,this.formsEmployees.value).subscribe(() =>{
  window.alert('Employee Updated');
this.router.navigateByUrl('/employees');
})
}
}
