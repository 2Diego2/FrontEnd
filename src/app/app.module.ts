import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { SobremiComponent } from './componentes/sobremi/sobremi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { IndexComponent } from './componentes/index/index.component';
import { RouterModule } from '@angular/router';
import { BotonesComponent } from './componentes/botones/botones.component';
import { EducationComponent } from './componentes/app-education/app-education.component';
import { EducacionComponent } from './educacion/educacion.component';
import { MyComponentComponent } from './componentes/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    SobremiComponent,
    ProyectosComponent,
    IndexComponent,
    BotonesComponent,
    EducationComponent,
    EducacionComponent,
    MyComponentComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { }