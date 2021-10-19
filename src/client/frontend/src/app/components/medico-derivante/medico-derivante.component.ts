import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { MedicoDerivanteService } from 'src/app/services/medico-derivante.service';


@Component({
  selector: 'app-medico-derivante',
  templateUrl: './medico-derivante.component.html',
  styleUrls: ['./medico-derivante.component.css']
})
export class MedicoDerivanteComponent implements OnInit {
  pageSize="5";
  fromItem:number=0;
  toItem:number=5;
  items:any[] = [];



  changePage(e:PageEvent){
    this.fromItem = e.pageIndex * e.pageSize;
    this.toItem = this.fromItem + e.pageSize
  }
  constructor(
    private medicoDerivanteService: MedicoDerivanteService,
    private router: Router
  ) { }

  getMedicosDerivantes = () => {
    this.medicoDerivanteService.getMedicoDerivante()
      .subscribe((resp) => this.items = resp)
  }
  addMedicoDerivante = () => {
    this.router.navigate(['/alta-medicos-derivante']);
  }
  editMedicoDerivante = (event:any, item:any) => {
    this.router.navigate([`/editar-medicos-derivante/${item._id}`]);
  }
  deleteMedicoDerivante = (id:string) => {
    let idMedico= {'_id': id}
    this.medicoDerivanteService.deleteMedicoDerivante(idMedico).subscribe(() => this.getMedicosDerivantes())

  }
  ngOnInit(): void {
    this.getMedicosDerivantes()
  }




}
