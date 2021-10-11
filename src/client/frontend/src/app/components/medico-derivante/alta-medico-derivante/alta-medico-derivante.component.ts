import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicoDerivanteService } from 'src/app/services/medico-derivante.service';

@Component({
  selector: 'app-alta-medico-derivante',
  templateUrl: './alta-medico-derivante.component.html',
  styleUrls: ['./alta-medico-derivante.component.css']
})

export class AltaMedicoDerivanteComponent implements OnInit {



  //TODO : When entry by edit mode, get data of Medico Derivante and save in user
  user={
    name:'',
    surname:'',
    email:'',
    phone:''
  }
  constructor(
    private medicoDerivanteService: MedicoDerivanteService,
    private router: Router
  ){}

  ngOnInit(): void {
  }


  onSubmit( formMedicoDerivante: NgForm ){

    if(!formMedicoDerivante.invalid){
      console.log("Submited! ", formMedicoDerivante.value)
      this.medicoDerivanteService.createMedicoDerivante(formMedicoDerivante.value).subscribe(res =>{
        console.log(res);
        this.router.navigate(['/tareas-privadas']);
      })
    }else{
      Object.values(formMedicoDerivante.controls).forEach(control=> {
        control.markAsTouched();
      })
    }
  }

}
