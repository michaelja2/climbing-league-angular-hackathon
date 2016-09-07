import { Component, OnInit } from '@angular/core';
import { Team } from './team'
import { LeagueDataService } from './league-data.service';
import { EditTeamComponent } from './edit-team.component';
import { HttpTestComponent } from './http-test.component'

@Component({
    selector: 'my-admin',
    templateUrl: 'tsapp/admin.component.html',
    providers: [LeagueDataService],
    directives: [EditTeamComponent, HttpTestComponent]
})

export class AdminComponent {
    selectedTeam: Team;
    teams: Team[];
    nextTeamId: number;
    
    constructor (private _httpService: LeagueDataService) {
        
    }
    
  ngOnInit() {
    this._httpService.getTeamsFromDB().subscribe(
            data => {
              var temp : Team[];
              if (data == undefined) {
                data = [];
              }              
              temp = data;
              this.teams = temp.sort(function(a, b){return b.total - a.total;});
              this._httpService.setTeams(this.teams);
            },
            error => alert(error),
            () => console.log("Finished Admin Service")
        );
        
        this._httpService.getNextTeamIdFromDB().subscribe(
            data => this.nextTeamId = data,
            error => alert(error),
            () => console.log("Finished getting next team id")
        );         
  }
      
    onTeamSelected(t) {
        this.selectedTeam = t;
    }
    
    onAddTeam() {
        this.teams.push(new Team(this.nextTeamId, "New Team", []));
        this.nextTeamId = this.nextTeamId + 1;
        this._httpService.saveNextTeamId(this.nextTeamId).subscribe(
            response => console.log(JSON.stringify(response)),
            error => console.log(error)
        );   
        this._httpService.setTeams(this.teams); 
        this._httpService.saveTeamsToDB().subscribe(
            response => console.log(JSON.stringify(response)),
            error => console.log(error)
        );   
    }
    
    onDeleteTeam(team: Team) {
        var temp: Team[] = [];
        this.teams.forEach(m => {
            if (m.id != team.id) {
                temp.push(m);
            };
        });
        this.teams = temp;
        this._httpService.setTeams(this.teams); 
        this._httpService.saveTeamsToDB().subscribe(
            response => console.log(JSON.stringify(response)),
            error => console.log(error)
        );
    }
}