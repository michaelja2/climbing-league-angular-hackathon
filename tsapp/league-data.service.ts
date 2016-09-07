import { Team } from './team';
import { TeamMember } from './team-member';
import { Injectable } from '@angular/core';
import { Headers, Http, HTTP_PROVIDERS } from '@angular/http';

@Injectable()
export class LeagueDataService {
    teams: Team[] = [];
    nextTeamId: number;
    nextClimberId: number;
    service = this;
    constructor(private _http: Http) {

        
        // this.teams.push(new Team(1, "Mountain Goats", [
        //     new TeamMember(1, "Person A", 0), 
        //     new TeamMember(2, "Person B", 0) 
        //     ] ));
        // this.teams.push(new Team(2, "Pinches aint Sh*t", [
        //     new TeamMember(3, "Omar", 1000), 
        //     new TeamMember(4, "Jason", 1020), 
        //     new TeamMember(5, "Dom", 69)
        //     ] ));
        // this.teams.push(new Team(3, "Moody Dismantlers", [
        //     new TeamMember(6, "Person A", 0), 
        //     new TeamMember(7, "Person B", 0) 
        //     ] ));            
    }
      
    getCurrentTime() {
        return this._http.get('http://date.jsontest.com').map(res => res.json());            
    }
    
    postJSON() {
        var json = JSON.stringify(this.teams);
        var params = 'json=' + json;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        
        return this._http.post('http://validate.jsontest.com', params, { headers: headers })
            .map ( res => res.json());
    }
    
    saveTeamsToDB() {
        // update totals                
        this.teams.forEach(t => {
            if (t.members != undefined) {
                var newTotal = 0;
                t.members.forEach(m => {
                    m.team = t.name;
                    newTotal = newTotal + m.score;
                });
                t.total = newTotal;                
            }
        })
        
        const body = JSON.stringify(this.teams);
        console.log(body);
        return this._http.put('https://glowing-torch-4084.firebaseio.com/teams.json', body).map(response => response.json());
    }
    
    getTeamsFromDB() {                
        return this._http.get('https://glowing-torch-4084.firebaseio.com/teams.json').map(response => response.json());
        //  .subscribe(
        //     data => this.teams = data,
        //     error => alert(error),
        //     () => console.log("Finished")
        // );
        
        // this.teams = this.teams.sort(function(a, b){return b.total - a.total;});
        
        // this.teams = this.teams.sort(function(a, b) {
        //     var aTotal = 0;
        //     var bTotal = 0;
        //     a.members.forEach(a => aTotal = aTotal + a.score);
        //     b.members.forEach(b => bTotal = bTotal + b.score);
        //     return bTotal - aTotal;
        //     }); 
            
        // return this.teams;
    }
    
    getNextTeamIdFromDB() {
        return this._http.get('https://glowing-torch-4084.firebaseio.com/nextTeamID.json').map(response => response.json());
    }

    getNextClimberIdFromDB() {
        return this._http.get('https://glowing-torch-4084.firebaseio.com/nextClimberID.json').map(response => response.json());
    }
    
    saveNextTeamId(input: number) {
        this.nextTeamId = input;
        return this._http.put('https://glowing-torch-4084.firebaseio.com/nextTeamID.json', JSON.stringify(this.nextTeamId)).map(response => response.json());        
    }

    saveNextClimberId(input: number) {
        this.nextClimberId = input;
        return this._http.put('https://glowing-torch-4084.firebaseio.com/nextClimberID.json', JSON.stringify(this.nextClimberId)).map(response => response.json());        
    }
    
    setTeams(teams: Team[]) {
        this.teams = teams;
    }
    
    getTeams() : Team[] {
        return this.teams;
    }
    
    getTeam(id: number) {
        return this.teams.filter(t => t.id === id)[0];
    }
}