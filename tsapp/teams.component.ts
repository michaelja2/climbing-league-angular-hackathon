import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Team } from './team';
import { LeagueDataService } from './league-data.service';

// single brackets indicate a one-way binding from the control
// single square brackets indicate a one-way binding to the control
// both together indicate two-way binding.
@Component({
    selector: 'my-teams',
    templateUrl: 'tsapp/teams.component.html',
    styleUrls:  ['tsapp/teams.component.css'],
})

export class TeamsComponent implements OnInit {
  teams: Team[] = [];

  constructor(
    private router: Router,
    private leagueDataService: LeagueDataService) {
  }

  ngOnInit() {
    this.leagueDataService.getTeamsFromDB().subscribe(
            data => {
              var temp : Team[];
              if (data == undefined) {
                data = [];
              }
              
              temp = data;
              this.teams = temp.sort(function(a, b){return b.total - a.total;});
              this.leagueDataService.setTeams(this.teams);
            },
            error => alert(error),
            () => console.log("Finished")
        );        
  }

  showTeam(team: Team) {
    let link = ['TeamDetail', { id: team.id }];
    this.router.navigate(link);
  }
}