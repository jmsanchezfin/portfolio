import { Component, OnInit } from '@angular/core';
import { HttpClientExperienceService, Experience } from 'src/app/common/http-client-experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private httpClientExperienceService: HttpClientExperienceService) { }

  ngOnInit(): void {
    this.httpClientExperienceService.getExperiences().subscribe((response) => {
      this.experiences = response;
    });
  }
}
