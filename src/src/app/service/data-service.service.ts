import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Team } from '../core/request/team';
import { Game } from '../core/request/game';
import { Predictions } from '../core/request/predictions';
import { GamePlayed } from '../core/request/gamesplayed';
import { GamesInThisSeason } from '../core/request/gamesInThisSeason';
import { NextFiveMatches } from '../core/request/nextFiveMatches';
import { HeadToHead } from '../core/request/headToHead';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {

    return this.http.get('https://api.squiggle.com.au/?q=teams').pipe(
      map((data: any) => data.teams.map((item: any) => new Team(
        item.logo,
        item.id,
        item.name,
        item.abbrev
      ))));
  }

  getGames(): Observable<Game[]> {

    return this.http.get('https://api.squiggle.com.au/?q=games;round=1;year=2019').pipe(
      map((data: any) => data.games.map((item: any) => new Game(
        item.complete,
        item.is_grand_final,
        item.tz,
        item.hbehinds,
        item.ateam,
        item.winnerteamid,
        item.hgoals,
        item.updated,
        item.round,
        item.is_final,
        item.hscore,
        item.abehinds,
        item.winner,
        item.ascore,
        item.hteam,
        item.ateamid,
        item.venue,
        item.hteamid,
        item.agoals,
        item.year,
        item.date,
        item.id
      )))
    );
  }

  getPredictions(): Observable<Predictions[]> {
    return this.http.get('https://api.squiggle.com.au/?q=ladder;year=2019').pipe(
      map((data: any) => data.ladder.map((item: any) => new Predictions(
        item.swarms,
        item.rank,
        item.source,
        item.wins,
        item.percentage,
        item.teamid,
        item.mean_rank,
        item.updated,
        item.team,
        item.round,
        item.sourceid,
        item.year
      )))
    );
  }

  getGamePlayed(): Observable<GamePlayed[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=2018;complete=100').pipe(
      map((data: any) => data.games.map((item: any) =>
        // console.log(item)
        new GamePlayed(
          item.is_grand_final,
          item.venue,
          item.hgoals,
          item.hbehinds,
          item.updated,
          item.id,
          item.complete,
          item.hteam,
          item.winnerteamid,
          item.abehinds,
          item.date,
          item.winner,
          item.ateamid,
          item.agoals,
          item.hscore,
          item.ascore,
          item.hteamid,
          item.is_final,
          item.ateam,
          item.year,
          item.tz,
          item.round
        )))
    );
  }

  getGamesInThisSeason(): Observable<GamesInThisSeason[]> {
    return this.http.get(' https://api.squiggle.com.au/?q=games;year=2019').pipe(
      map((data: any) => data.games.map((item: any) =>
        new GamesInThisSeason(
          item.is_grand_final,
          item.venue,
          item.hgoals,
          item.hbehinds,
          item.updated,
          item.id,
          item.complete,
          item.hteam,
          item.winnerteamid,
          item.abehinds,
          item.date,
          item.winner,
          item.ateamid,
          item.agoals,
          item.hscore,
          item.ascore,
          item.hteamid,
          item.is_final,
          item.ateam,
          item.year,
          item.tz,
          item.round
        )))
    );
  }

  getNextFiveMatches(): Observable<NextFiveMatches[]> {
    return this.http.get('https://api.squiggle.com.au/?q=games;year=2019;round=1').pipe(
      map((data: any) => data.games.map((item: any) =>
        // console.log(item)
        new NextFiveMatches(
          item.is_grand_final,
          item.venue,
          item.hgoals,
          item.hbehinds,
          item.updated,
          item.id,
          item.complete,
          item.hteam,
          item.winnerteamid,
          item.abehinds,
          item.date,
          item.winner,
          item.ateamid,
          item.agoals,
          item.hscore,
          item.ascore,
          item.hteamid,
          item.is_final,
          item.ateam,
          item.year,
          item.tz,
          item.round
        )))
    );
  }

  getHeadToHead(): Observable<HeadToHead[]> {
    return this.http.get('https://api.squiggle.com.au/?q=tips;year=2018;round=1').pipe(
      map((data: any) => data.tips.map((item: any) =>
        // console.log(item)
        new HeadToHead(
          item.margin,
          item.hconfidence,
          item.confidence,
          item.venue,
          item.updated,
          item.tipteamid,
          item.gameid,
          item.tip,
          item.sourceid,
          item.hteam,
          item.err,
          item.correct,
          item.ateamid,
          item.source,
          item.date,
          item.hteamid,
          item.ateam,
          item.bits,
          item.round,
          item.year
        )))
    );
  }

}
