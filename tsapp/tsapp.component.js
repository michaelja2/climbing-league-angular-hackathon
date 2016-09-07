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
var teams_component_1 = require('./teams.component');
var courses_component_1 = require('./courses.component');
var climbers_component_1 = require('./climbers.component');
var team_detail_component_1 = require('./team-detail.component');
var http_test_component_1 = require('./http-test.component');
var admin_component_1 = require('./admin.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ts-app',
            templateUrl: 'tsapp/tsapp.nav.html',
            directives: [http_test_component_1.HttpTestComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS,
                league_data_service_1.LeagueDataService
            ]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/teams',
                name: 'Teams',
                component: teams_component_1.TeamsComponent,
                useAsDefault: true
            },
            {
                path: '/detail/:id',
                name: 'TeamDetail',
                component: team_detail_component_1.TeamDetailComponent
            },
            {
                path: '/climbers',
                name: 'Climbers',
                component: climbers_component_1.ClimbersComponent
            },
            {
                path: '/admin',
                name: 'Admin',
                component: admin_component_1.AdminComponent
            },
            {
                path: '/test',
                name: 'Test',
                component: courses_component_1.CoursesComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=tsapp.component.js.map