import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../model/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url = 'http://localhost:8080/skills/';

  constructor(private http: HttpClient) { }

  getAllSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.url);
  }

  updateSkills(skills: Skills): Observable<any> {
    const url = `${this.url}/edit`;
    return this.http.put(url, skills);
  }
}
