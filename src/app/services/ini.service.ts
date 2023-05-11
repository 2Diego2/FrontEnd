import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inicio } from '../model/inicio'; 

@Injectable({
  providedIn: 'root'
})
export class InicioService {
 url = 'http://localhost:8080/inicio/'; 

  constructor(private http: HttpClient) { }

  mostrarInicio(): Observable<Inicio> {
    const url = `${this.url}/inicio`;
    return this.http.get<Inicio>(url);
  }

  actualizarInicio(inicio: Inicio): Observable<any> {
    const url = `${this.url}/inicio/update`;
    return this.http.post(url, inicio);
  }
}
