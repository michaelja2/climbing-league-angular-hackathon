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
var team_1 = require('./team');
var league_data_service_1 = require('./league-data.service');
var edit_team_component_1 = require('./edit-team.component');
var http_test_component_1 = require('./http-test.component');
var AdminComponent = (function () {
    function AdminComponent(_httpService) {
        this._httpService = _httpService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._httpService.getTeamsFromDB().subscribe(function (data) {
            var temp;
            if (data == undefined) {
                data = [];
            }
            temp = data;
            _this.teams = temp.sort(function (a, b) { return b.total - a.total; });
            _this._httpService.setTeams(_this.teams);
        }, function (error) { return alert(error); }, function () { return console.log("Finished Admin Service"); });
        this._httpService.getNextTeamIdFromDB().subscribe(function (data) { return _this.nextTeamId = data; }, function (error) { return alert(error); }, function () { return console.log("Finished getting next team id"); });
    };
    AdminComponent.prototype.onTeamSelected = function (t) {
        this.selectedTeam = t;
    };
    AdminComponent.prototype.onAddTeam = function () {
        this.teams.push(new team_1.Team(this.nextTeamId, "New Team", []));
        this.nextTeamId = this.nextTeamId + 1;
        this._httpService.saveNextTeamId(this.nextTeamId).subscribe(function (response) { return console.log(JSON.stringify(response)); }, function (error) { return console.log(error); });
        this._httpService.setTeams(this.teams);
        this._httpService.saveTeamsToDB().subscribe(function (response) { return console.log(JSON.stringify(response)); }, function (error) { return console.log(error); });
    };
    AdminComponent.prototype.onDeleteTeam = function (team) {
        var temp = [];
        this.teams.forEach(function (m) {
            if (m.id != team.id) {
                temp.push(m);
            }
            ;
        });
        this.teams = temp;
        this._httpService.setTeams(this.teams);
        this._httpService.saveTeamsToDB().subscribe(function (response) { return console.log(JSON.stringify(response)); }, function (error) { return console.log(error); });
    };
    AdminComponent = __decorate([
        core_1.Component({
            selector: 'my-admin',
            templateUrl: 'tsapp/admin.component.html',
            providers: [league_data_service_1.LeagueDataService],
            directives: [edit_team_component_1.EditTeamComponent, http_test_component_1.HttpTestComponent]
        }), 
        __metadata('design:paramtypes', [league_data_service_1.LeagueDataService])
    ], AdminComponent);
    return AdminComponent;
}());
exports.AdminComponent = AdminComponent;
//# sourceMappingURL=admin.component.js.map