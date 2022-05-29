import { Component, OnInit } from '@angular/core';
import { UserProfileService} from 'src/app/common/user-profile.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private userProfile: UserProfileService) { }

  ngOnInit(): void {
    this.userProfile.getData();
  }

}
