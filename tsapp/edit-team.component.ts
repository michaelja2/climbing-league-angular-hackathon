import { Component, OnInit } from '@angular/core';
import { FORM_DIRECTIVES, ControlGroup } from '@angular/common';

import { Team } from './team';
import { TeamMember } from './team-member';
import { LeagueDataService } from './league-data.service';

@Component({
    selector: 'editTeamComponent',
    templateUrl: 'tsapp/edit-team.component.html',
    inputs: ["currentTeam", "teams"],
    providers: [LeagueDataService]
})

export class EditTeamComponent {
    currentTeam: Team;
    nextId: number;
    teams: Team[];
    
    constructor (private _httpService: LeagueDataService) {
                 
    }
    
    ngOnInit() {
        this._httpService.getNextClimberIdFromDB().subscribe(
            data => this.nextId = data,
            error => alert(error),
            () => console.log("Finished getting next climber id")
        );         
    }
  
    onSubmit() {
        this._httpService.saveNextClimberId(this.nextId).subscribe(
            response => console.log(JSON.stringify(response)),
            error => console.log(error)
        );   
        this._httpService.setTeams(this.teams);
        this._httpService.saveTeamsToDB()
        .subscribe(
            response => console.log(JSON.stringify(response)),
            error => console.log(error)
        );        
    }
    
    onAddMember(team: Team) {
        if (this.currentTeam.members == undefined) {
            this.currentTeam.members = [];
        }
        this.currentTeam.members.push(new TeamMember(this.nextId, "New Climber", 0, this.currentTeam.name, ""));
        this.nextId = this.nextId + 1;   
    }
    
    onDeleteMember(team: Team, climber: TeamMember) {
        var temp: TeamMember[] = [];
        this.currentTeam.members.forEach(m => {
            if (m.id != climber.id) {
                temp.push(m);
            };
        });
        this.currentTeam.members = temp;
    }
}