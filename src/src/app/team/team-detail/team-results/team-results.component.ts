import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';
import { GamePlayed } from 'src/app/core/request/gamesplayed';

@Component({
  selector: 'app-team-results',
  templateUrl: './team-results.component.html',
  styleUrls: ['./team-results.component.css']
})
export class TeamResultsComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getGamePlayed();
  }


  game: GamePlayed[];

  getGamePlayed(): void {
    this.dataService.getGamePlayed().subscribe(temp => {
      this.game = temp;
      console.log(temp);
    });
  }

}
