import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Skill {
  constructor(
    public titulo: string,
    public nivel: string,
    public nivel_maximo: string,
    public descripcion_nivel: string    
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientSkillService {

  constructor(private httpClient: HttpClient) {}

  getSkills() {
    console.log('getSkills call');
    return this.httpClient.get<Skill[]>('http://localhost:8080/list/skill');
  }
}
