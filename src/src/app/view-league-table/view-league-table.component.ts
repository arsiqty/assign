import { Component, OnInit } from '@angular/core';
import { Team } from '../core/request/team';
import { Game } from '../core/request/game';
import { DataServiceService } from '../service/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-league-table',
  templateUrl: './view-league-table.component.html',
  styleUrls: ['./view-league-table.component.css']
})
export class ViewLeagueTableComponent implements OnInit {

  teams: Team[];
  games: Game[];

  constructor(private dataService: DataServiceService,
    private router: Router) { }

  ngOnInit() {
    this.getAFLTeams();
    this.getGames();
  }

  getAFLTeams(): void {
    this.dataService.getTeams().subscribe(temp => { this.teams = temp; });
  }

  getGames(): void {
    this.dataService.getGames().subscribe(temp => { this.games = temp; });
  }

   /**
   * Redirect user to team details page on summary tab.
   * @param id
   */
  navigateToDetail(id: number) {
    this.router.navigate(['/team-detail/', id]);
  }
}
