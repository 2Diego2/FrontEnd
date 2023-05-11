import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Navbar } from '../model/navbar'; // Asegúrate de importar la ruta correcta al archivo Navbar

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  url = 'http://localhost:8080/navbar/';

  constructor(private http: HttpClient) { }

  mostrarNavbar(): Observable<Navbar> {
    const url = `${this.url}/navbar`;
    return this.http.get<Navbar>(url);
  }

  actualizarNavbar(navbar: Navbar): Observable<any> {
    const url = `${this.url}/navbar/update`;
    return this.http.post(url, navbar);
  }
}
