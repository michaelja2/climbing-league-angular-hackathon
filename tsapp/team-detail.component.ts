import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

import { Team } from './team';
import { LeagueDataService } from './league-data.service';

@Component({
  selector: 'my-team-detail',
  templateUrl: 'tsapp/team-detail.component.html',
  styleUrls:  ['tsapp/team-detail.component.css'],  
})
export class TeamDetailComponent implements OnInit {
  team: Team;

  constructor(
    private leagueDataService: LeagueDataService,
    private routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.team = this.leagueDataService.getTeam(id);
  }

  navigateBack() {
    window.history.back();
  }

/*  showClimber(team: Team) {
    let link = ['ClimberDetail', { id: climber.id }];
    this.router.navigate(link);
  } */
}