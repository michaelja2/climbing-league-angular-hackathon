import { Component, OnInit } from '@angular/core';

import { Team } from './team';
import { TeamMember } from './team-member';
import { LeagueDataService } from './league-data.service';

@Component({
  selector: 'my-team-detail',
  templateUrl: 'tsapp/climbers.component.html',
  styleUrls:  ['tsapp/climbers.component.css'],  
})
export class ClimbersComponent implements OnInit {
  climbers: TeamMember[];

  constructor(
    private _httpService: LeagueDataService
    ) {
  }

  ngOnInit() {
    var teams;
    
    this._httpService.getTeamsFromDB().subscribe(
            data => {
              if (data == undefined) {
                data = [];
              }              
              teams = data;
            this.climbers = [];
            teams.forEach(t => {
                if (t.members != undefined) {
                  t.members.forEach(c => this.climbers.push(c))                  
                };
            });
            
            this.climbers = this.climbers.sort(function(a, b){return b.score - a.score;});              
            },
            error => alert(error),
            () => console.log("Finished Getting Climbers")
        );
  }
}