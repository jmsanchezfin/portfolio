/*In the constructor define the HTTPClient instance we will be using to make a call to the Spring Boot application. 
Here we will be using the Angular HTTPClient for calling the Spring Boot API to fetch the employee data. 
Also we will creating a method which makes call to the spring boot application using the defined httpClient.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class About {
  constructor(
    public id: string,
    public nombre: string,
    public apellido: string,
    public posicion: string,
    public cv_card_url: string,
    public banner_url: string,
    public acerca_de: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class HttpClientAboutService {
  
  constructor(private httpClient: HttpClient) {}

  getAbouts() {
    console.log('getAbouts call');
    return this.httpClient.get<About[]>('http://localhost:8080/list/about');
  }
}
