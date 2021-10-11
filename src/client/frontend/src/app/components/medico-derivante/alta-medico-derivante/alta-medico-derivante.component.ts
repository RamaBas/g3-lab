import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
  }

  createEntity(medic:Object){

  }

  onSubmit( formMedicoDerivante: NgForm ){

    if(!formMedicoDerivante.invalid){
      console.log("Submited! ",formMedicoDerivante.value)
    }else{
      Object.values(formMedicoDerivante.controls).forEach(control=> {
        control.markAsTouched();
      })
    }
  }

}
