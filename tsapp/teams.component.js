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
var router_deprecated_1 = require('@angular/router-deprecated');
var league_data_service_1 = require('./league-data.service');
// single brackets indicate a one-way binding from the control
// single square brackets indicate a one-way binding to the control
// both together indicate two-way binding.
var TeamsComponent = (function () {
    function TeamsComponent(router, leagueDataService) {
        this.router = router;
        this.leagueDataService = leagueDataService;
        this.teams = [];
    }
    TeamsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leagueDataService.getTeamsFromDB().subscribe(function (data) {
            var temp;
            if (data == undefined) {
                data = [];
            }
            temp = data;
            _this.teams = temp.sort(function (a, b) { return b.total - a.total; });
            _this.leagueDataService.setTeams(_this.teams);
        }, function (error) { return alert(error); }, function () { return console.log("Finished"); });
    };
    TeamsComponent.prototype.showTeam = function (team) {
        var link = ['TeamDetail', { id: team.id }];
        this.router.navigate(link);
    };
    TeamsComponent = __decorate([
        core_1.Component({
            selector: 'my-teams',
            templateUrl: 'tsapp/teams.component.html',
            styleUrls: ['tsapp/teams.component.css'],
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, league_data_service_1.LeagueDataService])
    ], TeamsComponent);
    return TeamsComponent;
}());
exports.TeamsComponent = TeamsComponent;
//# sourceMappingURL=teams.component.js.map