System.register(['../../Observable', '../../observable/interval'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, interval_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (interval_1_1) {
                interval_1 = interval_1_1;
            }],
        execute: function() {
            Observable_1.Observable.interval = interval_1.interval;
        }
    }
});
//# sourceMappingURL=interval.js.map