import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MedicoDerivanteService {

  private URL = '/api'

  constructor(private http:HttpClient, private router: Router) { }

  createMedicoDerivante(medicoDerivante : any){
    console.log("Se va a crear un Medico Derivante");

    return this.http.post<any>(this.URL + '/alta-medico-derivante', medicoDerivante)
  }

}
