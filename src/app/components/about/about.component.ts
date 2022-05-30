/*using constructor dependency injection we will be providing the AboutComponent an instance of HttpClientService. 
Using this service we make a call to spring boot application to get a list of abouts.
*/

import { Component, OnInit } from '@angular/core';
import { HttpClientAboutService, About } from 'src/app/common/http-client-about.service';
import { UserProfileService } from 'src/app/common/user-profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  abouts: About[] = [];

  constructor(private httpClientAboutService: HttpClientAboutService) {}

  ngOnInit(): void {
    this.httpClientAboutService
      .getAbouts()
      .subscribe(
        response =>{this.abouts = response;}
        );

  }
}
