import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { ActivatedRoute } from '@angular/router';
import { Predictions } from 'src/app/core/request/predictions';

@Component({
  selector: 'app-team-prediction',
  templateUrl: './team-prediction.component.html',
  styleUrls: ['./team-prediction.component.css']
})
export class TeamPredictionComponent implements OnInit {

  constructor(private dataService: DataServiceService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.getAFLPredictions();
  }

  predictions: Predictions[];
  id;
  predictionsDetails;

  getAFLPredictions(): void {
    this.dataService.getPredictions().subscribe(temp => {
      this.predictions = temp;

      this.router.params.subscribe(param => {
        this.id = param.id;
      })
      this.predictionsDetails = this.predictions.filter((el) => {
        return el.teamid == this.id;
      });
      // this.predictionsDetails = this.predictionsDetails[0];
      // console.log(this.predictionsDetails);
    });
  }

}
