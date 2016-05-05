System.register(['./Rx', './add/observable/dom/ajax', './add/observable/dom/webSocket', './observable/dom/AjaxObservable', './scheduler/asap', './scheduler/async', './scheduler/queue', './scheduler/animationFrame'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var asap_1, async_1, queue_1, animationFrame_1;
    var Scheduler;
    var exportedNames_1 = {
        'Scheduler': true,
        'AjaxRequest': true,
        'AjaxResponse': true,
        'AjaxError': true,
        'AjaxTimeoutError': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (Rx_1_1) {
                exportStar_1(Rx_1_1);
            },
            function (_1) {},
            function (_2) {},
            function (AjaxObservable_1_1) {
                exports_1({
                    "AjaxRequest": AjaxObservable_1_1["AjaxRequest"],
                    "AjaxResponse": AjaxObservable_1_1["AjaxResponse"],
                    "AjaxError": AjaxObservable_1_1["AjaxError"],
                    "AjaxTimeoutError": AjaxObservable_1_1["AjaxTimeoutError"]
                });
            },
            function (asap_1_1) {
                asap_1 = asap_1_1;
            },
            function (async_1_1) {
                async_1 = async_1_1;
            },
            function (queue_1_1) {
                queue_1 = queue_1_1;
            },
            function (animationFrame_1_1) {
                animationFrame_1 = animationFrame_1_1;
            }],
        execute: function() {
            /* tslint:enable:no-unused-variable */
            exports_1("Scheduler", Scheduler = {
                asap: asap_1.asap,
                async: async_1.async,
                queue: queue_1.queue,
                animationFrame: animationFrame_1.animationFrame
            });
        }
    }
});
//# sourceMappingURL=Rx.DOM.js.map