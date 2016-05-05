/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../typings/browser/ambient/es6-shim/es6-shim.d.ts"/>

import {AppComponent} from "./app.component";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {provide} from "@angular/core";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {ROUTER_PROVIDERS} from "@angular/router-deprecated";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);