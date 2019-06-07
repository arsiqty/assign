import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewLeagueTableComponent } from './view-league-table.component';
import { RouterModule } from '@angular/router';
import { DataServiceService } from '../service/data-service.service';

@NgModule({
  declarations: [ViewLeagueTableComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ViewLeagueTableComponent],
  providers: [DataServiceService]
})
export class ViewLeagueTableModule { }
