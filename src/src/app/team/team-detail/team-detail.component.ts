import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/core/request/team';
import { DataServiceService } from 'src/app/service/data-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  teams: Team[];
  teamDetails;

  constructor(private dataService: DataServiceService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.getAFLTeams();
  }
  id;
  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => {
      this.teams = temp;

      this.router.params.subscribe(param => {
        this.id = param.id;
      })
      this.teamDetails = this.teams.filter((el) => {
        return el.id == this.id;
      });
      this.teamDetails = this.teamDetails[0];
      // console.log(this.teamDetails);
    });
  }


}
