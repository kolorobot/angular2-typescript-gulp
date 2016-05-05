System.register(['../../Observable', '../../operator/windowTime'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, windowTime_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (windowTime_1_1) {
                windowTime_1 = windowTime_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.windowTime = windowTime_1.windowTime;
        }
    }
});
//# sourceMappingURL=windowTime.js.map