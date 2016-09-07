import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './tsapp.component';
import { ROUTER_PROVIDERS } from "@angular/router";
import { Http, HTTP_PROVIDERS } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS] );