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
var team_member_1 = require('./team-member');
var league_data_service_1 = require('./league-data.service');
var EditTeamComponent = (function () {
    function EditTeamComponent(_httpService) {
        this._httpService = _httpService;
    }
    EditTeamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getNextClimberIdFromDB().subscribe(function (data) { return _this.nextId = data; }, function (error) { return alert(error); }, function () { return console.log("Finished getting next climber id"); });
    };
    EditTeamComponent.prototype.onSubmit = function () {
        this._httpService.saveNextClimberId(this.nextId).subscribe(function (response) { return console.log(JSON.stringify(response)); }, function (error) { return console.log(error); });
        this._httpService.setTeams(this.teams);
        this._httpService.saveTeamsToDB()
            .subscribe(function (response) { return console.log(JSON.stringify(response)); }, function (error) { return console.log(error); });
    };
    EditTeamComponent.prototype.onAddMember = function (team) {
        if (this.currentTeam.members == undefined) {
            this.currentTeam.members = [];
        }
        this.currentTeam.members.push(new team_member_1.TeamMember(this.nextId, "New Climber", 0, this.currentTeam.name, ""));
        this.nextId = this.nextId + 1;
    };
    EditTeamComponent.prototype.onDeleteMember = function (team, climber) {
        var temp = [];
        this.currentTeam.members.forEach(function (m) {
            if (m.id != climber.id) {
                temp.push(m);
            }
            ;
        });
        this.currentTeam.members = temp;
    };
    EditTeamComponent = __decorate([
        core_1.Component({
            selector: 'editTeamComponent',
            templateUrl: 'tsapp/edit-team.component.html',
            inputs: ["currentTeam", "teams"],
            providers: [league_data_service_1.LeagueDataService]
        }), 
        __metadata('design:paramtypes', [league_data_service_1.LeagueDataService])
    ], EditTeamComponent);
    return EditTeamComponent;
}());
exports.EditTeamComponent = EditTeamComponent;
//# sourceMappingURL=edit-team.component.js.map