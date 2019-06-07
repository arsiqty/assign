import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamDetailComponent } from './team-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { TeamPredictionComponent } from './team-prediction/team-prediction.component';
import { TeamOpponentsComponent } from './team-opponents/team-opponents.component';
import { GamesHostingComponent } from './games-hosting/games-hosting.component';
import { TeamResultsComponent } from './team-results/team-results.component';
import { TeamsRivivalComponent } from './teams-rivival/teams-rivival.component';

const route: Routes = [
  { path: '', component: TeamDetailComponent }
]

@NgModule({
  declarations: [
    TeamDetailComponent,
    TeamPredictionComponent,
    TeamOpponentsComponent,
    GamesHostingComponent,
    TeamResultsComponent,
    TeamsRivivalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
  ]
})
export class TeamDetailModule { }
