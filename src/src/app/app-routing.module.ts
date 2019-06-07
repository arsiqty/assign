import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';

const routes: Routes = [
  { path: '', component: ViewLeagueTableComponent },

  { path: 'team-detail/:id', loadChildren: './team/team-detail/team-detail.module#TeamDetailModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
