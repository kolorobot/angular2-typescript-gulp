System.register(['../../Observable', '../../operator/timestamp'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, timestamp_1;
    return {
        setters:[
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (timestamp_1_1) {
                timestamp_1 = timestamp_1_1;
            }],
        execute: function() {
            Observable_1.Observable.prototype.timestamp = timestamp_1.timestamp;
        }
    }
});
//# sourceMappingURL=timestamp.js.map