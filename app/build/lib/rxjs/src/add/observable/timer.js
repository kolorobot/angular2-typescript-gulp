System.register(['../../Observable', '../../observable/timer'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, timer_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (timer_1_1) {
                timer_1 = timer_1_1;
            }],
        execute: function() {
            Observable_1.Observable.timer = timer_1.timer;
        }
    }
});
//# sourceMappingURL=timer.js.map