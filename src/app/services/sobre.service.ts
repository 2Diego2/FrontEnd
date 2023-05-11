import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sobremi } from '../model/sobremi';

@Injectable({
  providedIn: 'root'
})
export class SobreService {
  url = 'http://localhost:8080/sobremi/edit';

  constructor(private http: HttpClient) { }

  updateSobremi(sobremi: Sobremi): Observable<string> {
    return this.http.put<string>(this.url, sobremi);
  }
}
