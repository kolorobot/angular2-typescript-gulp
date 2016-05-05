System.register(['../../Observable', '../../operator/throttleTime'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, throttleTime_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (throttleTime_1_1) {
                throttleTime_1 = throttleTime_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.throttleTime = throttleTime_1.throttleTime;
        }
    }
});
//# sourceMappingURL=throttleTime.js.map