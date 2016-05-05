System.register(['../../Observable', '../../operator/bufferTime'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, bufferTime_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (bufferTime_1_1) {
                bufferTime_1 = bufferTime_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
        }
    }
});
//# sourceMappingURL=bufferTime.js.map