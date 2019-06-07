import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { GamesInThisSeason } from 'src/app/core/request/gamesInThisSeason';

@Component({
  selector: 'app-games-hosting',
  templateUrl: './games-hosting.component.html',
  styleUrls: ['./games-hosting.component.css']
})
export class GamesHostingComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getGamesInThisSeason();
  }
    
  game: GamesInThisSeason[];

  getGamesInThisSeason(): void {
    this.dataService.getGamePlayed().subscribe(temp => {
      this.game = temp;
    });
  }

}
