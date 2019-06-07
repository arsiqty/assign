import { Component, OnInit } from '@angular/core';
import { HeadToHead } from 'src/app/core/request/headToHead';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-teams-rivival',
  templateUrl: './teams-rivival.component.html',
  styleUrls: ['./teams-rivival.component.css']
})
export class TeamsRivivalComponent implements OnInit {

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.getheadToHead();
  }
    
  game: HeadToHead[];

  getheadToHead(): void {
    this.dataService.getHeadToHead().subscribe(temp => {
      this.game = temp;
    });
  }

}
