"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var tsapp_component_1 = require('./tsapp.component');
var router_1 = require("@angular/router");
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/toPromise');
platform_browser_dynamic_1.bootstrap(tsapp_component_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=tsmain.js.map