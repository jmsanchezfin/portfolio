import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Experience {
  constructor (
    public cargo: string,
    public empresa: string,
    public mes_inicio: string,
    public anio_inicio: string,
    public mes_fin: string,
    public anio_fin: string,
    public descripcion: string

  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class HttpClientExperienceService {

  constructor(private httpClient: HttpClient) {}

  getExperiences() {
    console.log('getExperiences call');
    return this.httpClient.get<Experience[]>('http://localhost:8080/list/experience');
  }
}
