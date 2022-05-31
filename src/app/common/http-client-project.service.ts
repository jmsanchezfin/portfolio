import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Project {
  constructor(
    public id: string,
    public titulo: string,
    public url: string,
    public descripcion: string    
  ) {}
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientProjectService {

  constructor(private httpClient: HttpClient) {}

  getProjects() {
    console.log('getProjects call');
    return this.httpClient.get<Project[]>('http://localhost:8080/list/project');
  }
}
