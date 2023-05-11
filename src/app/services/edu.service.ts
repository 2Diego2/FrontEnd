import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion'; 

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  url = 'http://localhost:8080/educacion/';  

  constructor(private http: HttpClient) { }

  getEducacionesBySobremiId(sobremiId: number): Observable<Educacion[]> {
    const url = `${this.url}/${sobremiId}`;
    return this.http.get<Educacion[]>(url);
  }

  updateEducacion(educacion: Educacion): Observable<string> {
    const url = `${this.url}/edit`;
    return this.http.put<string>(url, educacion);
  }

  eliminarEducacion(idEducacion: number): Observable<string> {
    const url = `${this.url}/eliminar?idEducacion=${idEducacion}`;
    return this.http.delete<string>(url);
  }
}