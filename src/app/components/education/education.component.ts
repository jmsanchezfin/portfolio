import { Component, OnInit } from '@angular/core';
import { HttpClientEducationService, Education } from 'src/app/common/http-client-education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educations: Education[] = [];

  constructor(private httpClientEducationService: HttpClientEducationService) { }

  ngOnInit(): void {
    this.httpClientEducationService.getEducations().subscribe((response) => {
      this.educations = response;
    });
  }
}
