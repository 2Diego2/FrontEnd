import { Component } from '@angular/core';
import { InicioService } from '../../services/ini.service'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private inicioService: InicioService) { }
}
