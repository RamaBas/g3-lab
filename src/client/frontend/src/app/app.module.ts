import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { TareasPrivadasComponent } from './components/tareas-privadas/tareas-privadas.component';

import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AltaMedicoDerivanteComponent } from './components/medico-derivante/alta-medico-derivante/alta-medico-derivante.component';
import { MedicoDerivanteComponent } from './components/medico-derivante/medico-derivante.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarComponent,
    IngresarComponent,
    TareasComponent,
    TareasPrivadasComponent,
    AltaMedicoDerivanteComponent,
    MedicoDerivanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
