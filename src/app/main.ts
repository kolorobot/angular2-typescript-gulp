/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>

import {provide} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";
import {AppComponent} from "./app.component";
import {TaskService} from "./todo/services/task.service";
import {HTTP_PROVIDERS} from "angular2/http";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    TaskService
]);