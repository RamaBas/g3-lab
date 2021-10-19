import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MedicoDerivanteService } from 'src/app/services/medico-derivante.service';

@Component({
  selector: 'app-alta-medico-derivante',
  templateUrl: './alta-medico-derivante.component.html',
  styleUrls: ['./alta-medico-derivante.component.css']
})

export class AltaMedicoDerivanteComponent implements OnInit {


  editMode= false;
  //TODO : When entry by edit mode, get data of Medico Derivante and save in user
  user:any = {
    name:'',
    surname:'',
    email:'',
    phone:''
  }

  constructor(
    private medicoDerivanteService: MedicoDerivanteService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  getMedicosDerivantes = (id: string) => {
    this.medicoDerivanteService.getMedicoDerivanteById(id)
      .subscribe((resp) => resp.map((usr:any) => this.user = usr))
  }

  backNavigate = () => {
    this.router.navigate(['/medicos-derivante']);
  }

  onSubmit( formMedicoDerivante: NgForm ){
    console.log("Entry",this.editMode)
    if(!formMedicoDerivante.invalid){
      !this.editMode ?
        this.medicoDerivanteService.createMedicoDerivante(formMedicoDerivante.value).subscribe(res =>{
          this.backNavigate()
        })
        : this.medicoDerivanteService.updateMedicoDerivante({...formMedicoDerivante.value, '_id':this.user._id}).subscribe(res =>{
            this.backNavigate()
          })

    }else{
      Object.values(formMedicoDerivante.controls).forEach(control=> {
        control.markAsTouched();
      })
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if(params.get('id')){
        this.editMode = true
        let id:string = params.get('id') ? params.get('id')! : ''
        this.getMedicosDerivantes(id)
      }
    });
  }

}
