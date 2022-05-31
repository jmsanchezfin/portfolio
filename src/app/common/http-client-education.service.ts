import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Education {
  constructor (
    public logo_url: string,
    public titulo: string,
    public institucion: string,
    public anio_inicio: string,
    public anio_fin: string

  ) {}

}

@Injectable({
  providedIn: 'root'
})
export class HttpClientEducationService {

  constructor(private httpClient: HttpClient) {}

  getEducations() {
    console.log('getEducations call');
    return this.httpClient.get<Education[]>('http://localhost:8080/list/education');
  }
}
