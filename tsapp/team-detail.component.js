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
var TeamDetailComponent = (function () {
    function TeamDetailComponent(leagueDataService, routeParams) {
        this.leagueDataService = leagueDataService;
        this.routeParams = routeParams;
    }
    TeamDetailComponent.prototype.ngOnInit = function () {
        var id = +this.routeParams.get('id');
        this.team = this.leagueDataService.getTeam(id);
    };
    TeamDetailComponent.prototype.navigateBack = function () {
        window.history.back();
    };
    TeamDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-team-detail',
            templateUrl: 'tsapp/team-detail.component.html',
            styleUrls: ['tsapp/team-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [league_data_service_1.LeagueDataService, router_deprecated_1.RouteParams])
    ], TeamDetailComponent);
    return TeamDetailComponent;
}());
exports.TeamDetailComponent = TeamDetailComponent;
//# sourceMappingURL=team-detail.component.js.map