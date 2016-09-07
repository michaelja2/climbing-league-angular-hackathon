import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { LeagueDataService } from './league-data.service'
import { TeamsComponent } from './teams.component';
import { CoursesComponent } from './courses.component';
import { ClimbersComponent } from './climbers.component';
import { TeamDetailComponent } from './team-detail.component';
import { HttpTestComponent } from './http-test.component'
import { AdminComponent } from './admin.component'

@Component({
  selector: 'ts-app',
  templateUrl: 'tsapp/tsapp.nav.html',
  directives: [HttpTestComponent, ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    LeagueDataService
  ]
})
@RouteConfig([
  {
    path: '/teams',
    name: 'Teams',
    component: TeamsComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'TeamDetail',
    component: TeamDetailComponent
  },
  {
    path: '/climbers',
    name: 'Climbers',
    component: ClimbersComponent
  },
  {
    path: '/admin',
    name: 'Admin',
    component: AdminComponent
  },
  {
    path: '/test',
    name: 'Test',
    component: CoursesComponent
  }
])
export class AppComponent { }