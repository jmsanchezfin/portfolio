import { Component, OnInit } from '@angular/core';
import {
  HttpClientSkillService,
  Skill,
} from 'src/app/common/http-client-skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];

  constructor(private httpClientSkillService: HttpClientSkillService) {}

  ngOnInit(): void {
    this.httpClientSkillService.getSkills().subscribe((response) => {
      this.skills = response;
    });
  }
}
