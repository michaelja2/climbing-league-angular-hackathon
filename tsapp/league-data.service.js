"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var LeagueDataService = (function () {
    function LeagueDataService(_http) {
        this._http = _http;
        this.teams = [];
        this.service = this;
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
    LeagueDataService.prototype.getCurrentTime = function () {
        return this._http.get('http://date.jsontest.com').map(function (res) { return res.json(); });
    };
    LeagueDataService.prototype.postJSON = function () {
        var json = JSON.stringify(this.teams);
        var params = 'json=' + json;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.post('http://validate.jsontest.com', params, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    LeagueDataService.prototype.saveTeamsToDB = function () {
        // update totals                
        this.teams.forEach(function (t) {
            if (t.members != undefined) {
                var newTotal = 0;
                t.members.forEach(function (m) {
                    m.team = t.name;
                    newTotal = newTotal + m.score;
                });
                t.total = newTotal;
            }
        });
        var body = JSON.stringify(this.teams);
        console.log(body);
        return this._http.put('https://glowing-torch-4084.firebaseio.com/teams.json', body).map(function (response) { return response.json(); });
    };
    LeagueDataService.prototype.getTeamsFromDB = function () {
        return this._http.get('https://glowing-torch-4084.firebaseio.com/teams.json').map(function (response) { return response.json(); });
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
    };
    LeagueDataService.prototype.getNextTeamIdFromDB = function () {
        return this._http.get('https://glowing-torch-4084.firebaseio.com/nextTeamID.json').map(function (response) { return response.json(); });
    };
    LeagueDataService.prototype.getNextClimberIdFromDB = function () {
        return this._http.get('https://glowing-torch-4084.firebaseio.com/nextClimberID.json').map(function (response) { return response.json(); });
    };
    LeagueDataService.prototype.saveNextTeamId = function (input) {
        this.nextTeamId = input;
        return this._http.put('https://glowing-torch-4084.firebaseio.com/nextTeamID.json', JSON.stringify(this.nextTeamId)).map(function (response) { return response.json(); });
    };
    LeagueDataService.prototype.saveNextClimberId = function (input) {
        this.nextClimberId = input;
        return this._http.put('https://glowing-torch-4084.firebaseio.com/nextClimberID.json', JSON.stringify(this.nextClimberId)).map(function (response) { return response.json(); });
    };
    LeagueDataService.prototype.setTeams = function (teams) {
        this.teams = teams;
    };
    LeagueDataService.prototype.getTeams = function () {
        return this.teams;
    };
    LeagueDataService.prototype.getTeam = function (id) {
        return this.teams.filter(function (t) { return t.id === id; })[0];
    };
    LeagueDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LeagueDataService);
    return LeagueDataService;
}());
exports.LeagueDataService = LeagueDataService;
//# sourceMappingURL=league-data.service.js.map