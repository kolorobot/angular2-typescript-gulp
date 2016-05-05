System.register(['../../Observable', '../../operator/sampleTime'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, sampleTime_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (sampleTime_1_1) {
                sampleTime_1 = sampleTime_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.sampleTime = sampleTime_1.sampleTime;
        }
    }
});
//# sourceMappingURL=sampleTime.js.map