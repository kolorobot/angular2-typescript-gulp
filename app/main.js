/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path="../../node_modules/angular2/typings/browser.d.ts"/>
System.register(["angular2/core", "angular2/platform/browser", "angular2/router", "./app.component", "./todo/services/task.service", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, browser_1, router_1, app_component_1, task_service_1, http_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                router_1.ROUTER_PROVIDERS,
                http_1.HTTP_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy }),
                task_service_1.TaskService
            ]);
        }
    }
});

//# sourceMappingURL=main.js.map
