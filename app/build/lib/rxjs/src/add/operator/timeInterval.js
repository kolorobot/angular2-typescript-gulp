System.register(['../../Observable', '../../operator/timeInterval'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, timeInterval_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (timeInterval_1_1) {
                timeInterval_1 = timeInterval_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.timeInterval = timeInterval_1.timeInterval;
        }
    }
});
//# sourceMappingURL=timeInterval.js.map