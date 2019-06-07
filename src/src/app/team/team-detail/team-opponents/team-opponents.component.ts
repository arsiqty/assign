import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { NextFiveMatches } from 'src/app/core/request/nextFiveMatches';

@Component({
  selector: 'app-team-opponents',
  templateUrl: './team-opponents.component.html',
  styleUrls: ['./team-opponents.component.css']
})
export class TeamOpponentsComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getNextFiveMatches();
  }
    
  game: NextFiveMatches[];

  getNextFiveMatches(): void {
    this.dataService.getNextFiveMatches().subscribe(temp => {
      this.game = temp;
    });
  }

}
