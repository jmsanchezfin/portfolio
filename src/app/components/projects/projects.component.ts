import { Component, OnInit } from '@angular/core';
import {
  HttpClientProjectService,
  Project,
} from 'src/app/common/http-client-project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private httpClientProjectService: HttpClientProjectService) {}

  ngOnInit(): void {
    this.httpClientProjectService.getProjects().subscribe((response) => {
      this.projects = response;
    });
  }
}
