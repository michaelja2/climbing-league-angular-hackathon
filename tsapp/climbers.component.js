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
var league_data_service_1 = require('./league-data.service');
var ClimbersComponent = (function () {
    function ClimbersComponent(_httpService) {
        this._httpService = _httpService;
    }
    ClimbersComponent.prototype.ngOnInit = function () {
        var _this = this;
        var teams;
        this._httpService.getTeamsFromDB().subscribe(function (data) {
            if (data == undefined) {
                data = [];
            }
            teams = data;
            _this.climbers = [];
            teams.forEach(function (t) {
                if (t.members != undefined) {
                    t.members.forEach(function (c) { return _this.climbers.push(c); });
                }
                ;
            });
            _this.climbers = _this.climbers.sort(function (a, b) { return b.score - a.score; });
        }, function (error) { return alert(error); }, function () { return console.log("Finished Getting Climbers"); });
    };
    ClimbersComponent = __decorate([
        core_1.Component({
            selector: 'my-team-detail',
            templateUrl: 'tsapp/climbers.component.html',
            styleUrls: ['tsapp/climbers.component.css'],
        }), 
        __metadata('design:paramtypes', [league_data_service_1.LeagueDataService])
    ], ClimbersComponent);
    return ClimbersComponent;
}());
exports.ClimbersComponent = ClimbersComponent;
//# sourceMappingURL=climbers.component.js.map